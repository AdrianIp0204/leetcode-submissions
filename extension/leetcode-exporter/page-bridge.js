(() => {
  const requestId = document.currentScript?.dataset.requestId || "";
  const mode = document.currentScript?.dataset.mode || "";
  const PAGE_NETWORK_SOURCE = "leetcode-repo-exporter-page-network";

  function absoluteUrl(value) {
    try {
      return new URL(String(value || ""), location.href).href;
    } catch {
      return String(value || "");
    }
  }

  function requestUrl(input) {
    if (typeof input === "string") return absoluteUrl(input);
    if (input instanceof URL) return absoluteUrl(input.href);
    return absoluteUrl(input?.url || "");
  }

  function requestBody(input, init) {
    if (init?.body) return init.body;
    return input?.body || "";
  }

  function textBody(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (value instanceof URLSearchParams) return value.toString();
    if (value instanceof FormData) {
      return [...value.entries()].map(([key, entry]) => `${key}=${String(entry)}`).join("&");
    }
    return "";
  }

  function parseJsonLike(value) {
    if (!value) return null;
    if (typeof value === "object") return value;
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!/^[{[]/.test(trimmed)) return null;
    try {
      return JSON.parse(trimmed);
    } catch {
      return null;
    }
  }

  function normalizeStatus(value) {
    const raw = String(value || "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
    if (!raw) return "";
    const lower = raw.toLowerCase();
    if (lower === "ac") return "Accepted";
    if (lower === "wa") return "Wrong Answer";
    if (lower === "tle") return "Time Limit Exceeded";
    if (lower === "mle") return "Memory Limit Exceeded";
    if (lower === "re") return "Runtime Error";
    if (lower === "ce") return "Compile Error";
    return raw;
  }

  function isInterestingRequest(url, body) {
    const value = `${url} ${textBody(body)}`;
    if (/\/submit\/?|\/submissions\/detail\/\d+\/check\/?/i.test(value)) return true;
    return /\/graphql\/?/i.test(url) && /\bsubmit\b/i.test(textBody(body));
  }

  function classifyRequest(url, body) {
    const bodyText = textBody(body);
    if (/\/submissions\/detail\/\d+\/check\/?/i.test(url)) return "check";
    if (/\/submit\/?/i.test(url)) return "submit";
    if (/\/graphql\/?/i.test(url) && /\bsubmit\b/i.test(bodyText)) return "submit";
    return "";
  }

  function firstSubmissionId(value, depth = 0) {
    if (!value || depth > 5) return "";
    if (typeof value !== "object") return "";

    const priority = [/^submission_?id$/i, /^submissionId$/i, /^submissionID$/i, /^id$/i];
    for (const wanted of priority) {
      for (const [key, entry] of Object.entries(value)) {
        if (wanted.test(key) && /^\d+$/.test(String(entry || ""))) {
          return String(entry);
        }
      }
    }

    for (const entry of Array.isArray(value) ? value : Object.values(value)) {
      const nested = firstSubmissionId(entry, depth + 1);
      if (nested) return nested;
    }

    return "";
  }

  function firstStatus(value, depth = 0) {
    if (!value || depth > 5) return "";
    if (typeof value !== "object") return "";

    const priority = ["statusDisplay", "status_msg", "statusMsg", "status", "state"];
    for (const wanted of priority) {
      for (const [key, entry] of Object.entries(value)) {
        if (key.toLowerCase() === wanted.toLowerCase() && entry != null) {
          return normalizeStatus(entry);
        }
      }
    }

    for (const entry of Array.isArray(value) ? value : Object.values(value)) {
      const nested = firstStatus(entry, depth + 1);
      if (nested) return nested;
    }

    return "";
  }

  function signalFromResponse(url, body, responsePayload) {
    const kind = classifyRequest(url, body);
    if (!kind) return null;

    const urlId = url.match(/\/submissions\/detail\/(\d+)\/check\/?/i)?.[1] || "";
    const parsedBody = parseJsonLike(textBody(body));
    const payload = parseJsonLike(responsePayload) || {};
    const submissionId = urlId || firstSubmissionId(payload) || firstSubmissionId(parsedBody);
    const status = firstStatus(payload);

    if (!submissionId && kind !== "submit") return null;

    return {
      kind,
      submissionId,
      status,
      href: location.href,
      url,
      observedAt: new Date().toISOString(),
    };
  }

  function postNetworkSignal(signal) {
    if (!signal) return;
    window.postMessage({ source: PAGE_NETWORK_SOURCE, payload: signal }, "*");
  }

  async function inspectFetchResponse(url, body, response) {
    if (!response || !isInterestingRequest(url, body)) return;

    try {
      const clone = response.clone();
      const contentType = clone.headers?.get?.("content-type") || "";
      const payload = /json/i.test(contentType) ? await clone.json() : await clone.text();
      postNetworkSignal(signalFromResponse(url, body, payload));
    } catch {
      // The page keeps the real response; observer failures should stay invisible.
    }
  }

  function inspectXhrResponse(xhr) {
    const url = xhr.__leetcodeRepoExporterUrl || "";
    const body = xhr.__leetcodeRepoExporterBody || "";
    if (!isInterestingRequest(url, body)) return;

    try {
      const payload = xhr.responseType === "json" ? xhr.response : xhr.responseText;
      postNetworkSignal(signalFromResponse(url, body, payload));
    } catch {
      // Ignore non-text/binary responses.
    }
  }

  function installNetworkObserver() {
    if (window.__leetcodeRepoExporterNetworkObserverInstalled) return;
    window.__leetcodeRepoExporterNetworkObserverInstalled = true;

    const originalFetch = window.fetch;
    if (typeof originalFetch === "function") {
      window.fetch = async function leetcodeRepoExporterFetch(input, init) {
        const url = requestUrl(input);
        const body = requestBody(input, init);
        const response = await originalFetch.apply(this, arguments);
        inspectFetchResponse(url, body, response);
        return response;
      };
    }

    const xhrPrototype = window.XMLHttpRequest?.prototype;
    if (xhrPrototype?.open && xhrPrototype?.send) {
      const originalOpen = xhrPrototype.open;
      const originalSend = xhrPrototype.send;

      xhrPrototype.open = function leetcodeRepoExporterOpen(method, url, ...rest) {
        this.__leetcodeRepoExporterUrl = requestUrl(url);
        return originalOpen.call(this, method, url, ...rest);
      };

      xhrPrototype.send = function leetcodeRepoExporterSend(body) {
        this.__leetcodeRepoExporterBody = body || "";
        this.addEventListener("loadend", () => inspectXhrResponse(this), { once: true });
        return originalSend.call(this, body);
      };
    }
  }

  function readMonacoModel() {
    const monaco = window.monaco;
    const models = monaco?.editor?.getModels?.() || [];
    const candidates = models
      .map((model) => ({
        value: model.getValue?.() || "",
        languageId: model.getLanguageId?.() || "",
        uri: String(model.uri || ""),
      }))
      .filter((model) => model.value.trim().length > 0)
      .sort((left, right) => right.value.length - left.value.length);

    return candidates[0] || null;
  }

  function readNextData() {
    const raw = document.getElementById("__NEXT_DATA__")?.textContent;
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return {
        page: parsed.page || "",
        query: parsed.query || {},
        propsKeys: Object.keys(parsed.props || {}),
      };
    } catch {
      return null;
    }
  }

  installNetworkObserver();

  if (requestId || mode !== "network-observer") {
    window.postMessage(
      {
        source: "leetcode-repo-exporter-page",
        requestId,
        payload: {
          model: readMonacoModel(),
          nextData: readNextData(),
          title: document.title,
          href: location.href,
        },
      },
      "*",
    );
  }
})();
