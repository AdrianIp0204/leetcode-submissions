(() => {
  if (window.__leetcodeRepoExporterContentLoaded) return;
  window.__leetcodeRepoExporterContentLoaded = true;

  const SOURCE = "leetcode-repo-exporter-content";

  const languageExtensions = {
    c: "c",
    cpp: "cpp",
    "c++": "cpp",
    csharp: "cs",
    "c#": "cs",
    golang: "go",
    go: "go",
    java: "java",
    javascript: "js",
    js: "js",
    kotlin: "kt",
    mysql: "sql",
    php: "php",
    postgres: "sql",
    python: "py",
    python3: "py",
    racket: "rkt",
    ruby: "rb",
    rust: "rs",
    scala: "scala",
    swift: "swift",
    typescript: "ts",
    ts: "ts",
  };

  function sanitizeSlug(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 90);
  }

  function text(selector) {
    return document.querySelector(selector)?.textContent?.trim() || "";
  }

  function findProblemSlug() {
    const pathMatch = location.pathname.match(/\/problems\/([^/]+)/);
    if (pathMatch) return sanitizeSlug(pathMatch[1]);

    const canonical = document.querySelector("link[rel='canonical']")?.href || "";
    const canonicalMatch = canonical.match(/\/problems\/([^/]+)/);
    if (canonicalMatch) return sanitizeSlug(canonicalMatch[1]);

    const problemLink = [...document.querySelectorAll("a[href*='/problems/']")]
      .map((link) => link.href.match(/\/problems\/([^/]+)/)?.[1])
      .find(Boolean);
    return sanitizeSlug(problemLink || "leetcode-solution");
  }

  function findTitle() {
    const candidates = [
      text('[data-cy="question-title"]'),
      text("div.text-title-large"),
      text("h1"),
      document.title.replace(/\s*-\s*LeetCode\s*$/i, "").trim(),
    ].filter(Boolean);

    return candidates[0] || "LeetCode Solution";
  }

  function splitFrontendIdAndTitle(rawTitle) {
    const cleanTitle = rawTitle.replace(/\s+-\s+LeetCode\s*$/i, "").trim();
    const match = cleanTitle.match(/^(\d+)\.\s+(.+)$/);
    if (!match) return { frontendId: "", title: cleanTitle };
    return { frontendId: match[1], title: match[2].trim() };
  }

  function hashString(value) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = (hash << 5) - hash + value.charCodeAt(index);
      hash |= 0;
    }
    return Math.abs(hash).toString(36);
  }

  function findAcceptedStatus() {
    const body = document.body?.textContent || "";
    if (/\bAccepted\b/.test(body)) return "Accepted";
    if (/\bWrong Answer\b/.test(body)) return "Wrong Answer";
    if (/\bRuntime Error\b/.test(body)) return "Runtime Error";
    if (/\bTime Limit Exceeded\b/.test(body)) return "Time Limit Exceeded";
    return "Unknown";
  }

  function hasAcceptedResultSignal() {
    const body = document.body?.textContent || "";
    if (!/\bAccepted\b/.test(body)) return false;
    if (/\/submissions(\/|$)/.test(location.pathname)) return true;
    return /\bRuntime\b/.test(body) && /\bMemory\b/.test(body);
  }

  function findSubmissionIdFromLocation() {
    return (
      location.pathname.match(/\/submissions\/(?:detail\/)?(\d+)/)?.[1] ||
      location.pathname.match(/\/problems\/[^/]+\/submissions\/(\d+)/)?.[1] ||
      ""
    );
  }

  function findAcceptedAutoSignal() {
    if (!hasAcceptedResultSignal()) return "";

    const submissionId = findSubmissionIdFromLocation();
    if (submissionId) return `submission:${submissionId}`;

    const statusElements = [...document.querySelectorAll("div,span,p")].filter(
      (element) => element.textContent?.trim() === "Accepted",
    );

    for (const element of statusElements) {
      let current = element;
      for (let depth = 0; current && depth < 5; depth += 1) {
        const value = current.textContent?.replace(/\s+/g, " ").trim() || "";
        if (value.includes("Accepted") && value.includes("Runtime") && value.includes("Memory")) {
          return `result:${findProblemSlug()}:${hashString(value.slice(0, 500))}`;
        }
        current = current.parentElement;
      }
    }

    return `result:${findProblemSlug()}:accepted`;
  }

  function isEditorMutation(mutation) {
    const target =
      mutation.target instanceof Element ? mutation.target : mutation.target.parentElement;
    if (!target) return false;

    return Boolean(
      target.closest(
        [
          "textarea",
          "[contenteditable='true']",
          ".monaco-editor",
          ".view-lines",
          ".inputarea",
          "[class*='CodeMirror']",
          "[data-cy='code-area']",
        ].join(","),
      ),
    );
  }

  function inferLanguageFromSource(source) {
    if (/^\s*class\s+Solution\b/m.test(source) && /\bpublic:/.test(source)) return "cpp";
    if (/^\s*class\s+Solution\b/m.test(source) && /\bpublic\s+/.test(source)) return "java";
    if (/^\s*def\s+\w+/.test(source) || /\bself\b/.test(source)) return "python3";
    if (/\bfunction\b|=>|\bconst\b|\blet\b/.test(source)) return "javascript";
    return "txt";
  }

  function normalizeLanguage(value, source) {
    const raw = String(value || "").trim();
    const lower = raw.toLowerCase().replace(/\s+/g, "");
    const aliases = {
      "c#": "csharp",
      "c++": "cpp",
      golang: "go",
      javascript: "javascript",
      js: "javascript",
      python: "python3",
      python3: "python3",
      typescript: "typescript",
      ts: "typescript",
    };
    const normalized = aliases[lower] || lower;
    return languageExtensions[normalized] ? normalized : inferLanguageFromSource(source);
  }

  function findLanguage(pagePayload, source) {
    const modelLanguage = pagePayload?.model?.languageId;
    const visibleLanguage = [
      text('[data-cy="lang-select"]'),
      text("button[aria-haspopup='listbox']"),
    ].find(Boolean);

    return normalizeLanguage(modelLanguage || visibleLanguage, source);
  }

  function extractDomCode() {
    const codeLike = [
      "pre code",
      "pre",
      "textarea",
      ".view-lines",
      "[class*='code'] pre",
      "[class*='CodeMirror-code']",
    ];

    for (const selector of codeLike) {
      const element = document.querySelector(selector);
      const value = element?.value || element?.textContent || "";
      if (value.trim().length > 20) return value.trimEnd();
    }

    return "";
  }

  function readPageContext() {
    return new Promise((resolve) => {
      const requestId = `lc-export-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const timeout = window.setTimeout(() => {
        window.removeEventListener("message", handleMessage);
        resolve(null);
      }, 1000);

      function handleMessage(event) {
        if (event.source !== window) return;
        if (event.data?.source !== "leetcode-repo-exporter-page") return;
        if (event.data?.requestId !== requestId) return;

        window.clearTimeout(timeout);
        window.removeEventListener("message", handleMessage);
        resolve(event.data.payload || null);
      }

      window.addEventListener("message", handleMessage);
      const script = document.createElement("script");
      script.src = chrome.runtime.getURL("page-bridge.js");
      script.dataset.requestId = requestId;
      script.onload = () => script.remove();
      script.onerror = () => {
        window.clearTimeout(timeout);
        window.removeEventListener("message", handleMessage);
        resolve(null);
      };
      document.documentElement.appendChild(script);
    });
  }

  function isoFromUnixSeconds(value) {
    const seconds = Number(value);
    if (!Number.isFinite(seconds)) return "";
    return new Date(seconds * 1000).toISOString();
  }

  function buildReadme({ title, problemUrl, language, status, exportedAt, submittedAt, submissionId }) {
    const lines = [
      `# ${title}`,
      "",
      `- LeetCode: ${problemUrl}`,
      `- Language: ${language}`,
      `- Exported at: ${exportedAt}`,
      `- Submission status seen by extension: ${status}`,
    ];

    if (submittedAt) lines.push(`- Submitted at: ${submittedAt}`);
    if (submissionId) lines.push(`- Submission ID: ${submissionId}`);

    return [
      ...lines,
      "",
      "## Key Idea",
      "",
      "TODO",
      "",
      "## Complexity",
      "",
      "- Time: TODO",
      "- Space: TODO",
      "",
    ].join("\n");
  }

  function buildExport({ source, title, slug, frontendId, language, status, exportedAt, submittedAt, problemUrl, code, submissionId }) {
    const folderPrefix = frontendId ? String(frontendId).padStart(4, "0") : "0000";
    const folder = `${folderPrefix}-${slug || sanitizeSlug(title) || "leetcode-solution"}`;
    const extension = languageExtensions[language] || "txt";
    const path = `submissions/${folder}/solution.${extension}`;

    return {
      source,
      title,
      slug,
      frontendId,
      language,
      status,
      exportedAt,
      submittedAt,
      submissionId,
      problemUrl,
      path,
      readmePath: `submissions/${folder}/README.md`,
      code,
      readme: buildReadme({ title, problemUrl, language, status, exportedAt, submittedAt, submissionId }),
      key: `${path}:${hashString(code || "")}`,
    };
  }

  async function collectSolution() {
    if (!location.hostname.endsWith("leetcode.com")) {
      throw new Error("Open a LeetCode page first.");
    }

    const pagePayload = await readPageContext();
    const source = (pagePayload?.model?.value || extractDomCode()).trimEnd();
    if (!source || source.length < 10) {
      throw new Error("Could not find visible solution code on this page.");
    }

    const slug = findProblemSlug();
    const rawTitle = findTitle();
    const { frontendId, title } = splitFrontendIdAndTitle(rawTitle);
    const language = findLanguage(pagePayload, source);
    const status = findAcceptedStatus();
    const exportedAt = new Date().toISOString();
    const problemUrl = slug ? `https://leetcode.com/problems/${slug}/` : location.href;

    return buildExport({
      source: SOURCE,
      title,
      slug,
      frontendId,
      language,
      status,
      exportedAt,
      problemUrl,
      code: source,
    });
  }

  async function fetchLeetCodeGraphql(query, variables) {
    const response = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode request failed: HTTP ${response.status}`);
    }

    const body = await response.json();
    if (body.errors?.length) {
      throw new Error(body.errors.map((error) => error.message).join("; "));
    }

    return body.data || {};
  }

  const submissionListQuery = `query submissions($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String) {
    submissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
      lastKey
      hasNext
      submissions {
        id
        title
        titleSlug
        statusDisplay
        lang
        timestamp
        url
      }
    }
  }`;

  const submissionDetailsQuery = `query submissionDetails($submissionId: Int!) {
    submissionDetails(submissionId: $submissionId) {
      id
      code
      runtime
      memory
      statusDisplay
      timestamp
      question {
        questionFrontendId
        title
        titleSlug
      }
      lang {
        name
        verboseName
      }
    }
  }`;

  function exportFromSubmission(summary, details) {
    const code = String(details?.code || "").trimEnd();
    if (!code) return null;

    const question = details?.question || {};
    const title = question.title || summary.title || "LeetCode Solution";
    const slug = sanitizeSlug(question.titleSlug || summary.titleSlug || title);
    const frontendId = question.questionFrontendId || "";
    const language = normalizeLanguage(details?.lang?.name || details?.lang?.verboseName || summary.lang, code);
    const status = details?.statusDisplay || summary.statusDisplay || "Accepted";
    const exportedAt = new Date().toISOString();
    const submittedAt = isoFromUnixSeconds(details?.timestamp || summary.timestamp);
    const problemUrl = slug ? `https://leetcode.com/problems/${slug}/` : `https://leetcode.com${summary.url || ""}`;

    return buildExport({
      source: "leetcode-repo-exporter-history",
      title,
      slug,
      frontendId,
      language,
      status,
      exportedAt,
      submittedAt,
      problemUrl,
      code,
      submissionId: details?.id || summary.id,
    });
  }

  async function collectLatestAcceptedSubmissionForPage() {
    const slug = findProblemSlug();
    if (!slug || slug === "leetcode-solution") {
      throw new Error("Could not identify the current LeetCode problem.");
    }

    const data = await fetchLeetCodeGraphql(submissionListQuery, {
      offset: 0,
      limit: 10,
      lastKey: null,
      questionSlug: slug,
    });
    const submissions = data.submissionList?.submissions;
    if (!Array.isArray(submissions)) {
      throw new Error("LeetCode did not return your submission list. Check that you are logged in.");
    }

    const accepted = submissions.find((submission) => submission.statusDisplay === "Accepted");
    if (!accepted) {
      throw new Error("No accepted submission was found for this problem yet.");
    }

    const detailsData = await fetchLeetCodeGraphql(submissionDetailsQuery, {
      submissionId: Number(accepted.id),
    });
    const exported = exportFromSubmission(accepted, detailsData.submissionDetails);
    if (!exported) throw new Error("Could not read the latest accepted submission code.");
    return exported;
  }

  async function collectAutoAcceptedSolution() {
    if (findSubmissionIdFromLocation()) return collectSolution();
    return collectLatestAcceptedSubmissionForPage();
  }

  function sleep(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  async function collectAcceptedHistory({ limit = 100 } = {}) {
    const maxAccepted = Math.max(1, Math.min(Number(limit) || 100, 300));
    const pageLimit = 20;
    const exports = [];
    const seenIds = new Set();
    let offset = 0;
    let lastKey = null;
    let scanned = 0;

    for (let page = 0; page < 25 && exports.length < maxAccepted; page += 1) {
      const data = await fetchLeetCodeGraphql(submissionListQuery, {
        offset,
        limit: pageLimit,
        lastKey,
        questionSlug: null,
      });
      const list = data.submissionList;
      const submissions = list?.submissions;

      if (!Array.isArray(submissions)) {
        throw new Error("LeetCode did not return your submission list. Check that you are logged in.");
      }

      if (submissions.length === 0) break;
      scanned += submissions.length;

      for (const submission of submissions) {
        if (exports.length >= maxAccepted) break;
        if (submission.statusDisplay !== "Accepted") continue;
        if (seenIds.has(submission.id)) continue;
        seenIds.add(submission.id);

        const detailsData = await fetchLeetCodeGraphql(submissionDetailsQuery, {
          submissionId: Number(submission.id),
        });
        const exported = exportFromSubmission(submission, detailsData.submissionDetails);
        if (exported) exports.push(exported);
        await sleep(250);
      }

      if (!list.hasNext) break;
      offset += pageLimit;
      lastKey = list.lastKey || null;
    }

    return {
      scanned,
      exports,
    };
  }

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type === "collect-solution") {
      collectSolution()
        .then((payload) => sendResponse({ ok: true, payload }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));

      return true;
    }

    if (message?.type === "collect-history") {
      collectAcceptedHistory(message.payload || {})
        .then((payload) => sendResponse({ ok: true, payload }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));

      return true;
    }

    return false;
  });

  let autoTimer = null;
  let observer = null;
  let autoCaptureStopped = false;
  let lastAutoKey = "";
  let lastAutoSignal = "";
  let lastAutoCheckAt = 0;
  const AUTO_CAPTURE_MIN_CHECK_MS = 15_000;

  function isExtensionContextInvalidated(error) {
    return /Extension context invalidated/i.test(error?.message || String(error));
  }

  function stopAutoCaptureForInvalidatedContext(error) {
    if (!isExtensionContextInvalidated(error)) return false;
    autoCaptureStopped = true;
    window.clearTimeout(autoTimer);
    observer?.disconnect();
    return true;
  }

  async function maybeAutoCapture() {
    if (autoCaptureStopped) return;
    try {
      const settings = await chrome.storage.local.get({ autoCapture: true });
      if (!settings.autoCapture) return;

      const autoSignal = findAcceptedAutoSignal();
      if (!autoSignal) return;

      const now = Date.now();
      if (autoSignal === lastAutoSignal && now - lastAutoCheckAt < AUTO_CAPTURE_MIN_CHECK_MS) {
        return;
      }
      lastAutoSignal = autoSignal;
      lastAutoCheckAt = now;

      const payload = await collectAutoAcceptedSolution();
      if (payload.status !== "Accepted") return;
      const autoKey = payload.submissionId ? `submission:${payload.submissionId}` : payload.key;
      if (autoKey === lastAutoKey) return;
      lastAutoKey = autoKey;
      chrome.runtime.sendMessage({ type: "auto-captured-solution", payload }, () => {
        void chrome.runtime.lastError;
      });
    } catch (error) {
      if (stopAutoCaptureForInvalidatedContext(error)) return;
      // Most LeetCode pages do not expose an accepted solution; ignore quiet auto-capture misses.
    }
  }

  function scheduleAutoCapture(delay = 1200) {
    if (autoCaptureStopped) return;
    window.clearTimeout(autoTimer);
    autoTimer = window.setTimeout(maybeAutoCapture, delay);
  }

  window.addEventListener("load", () => scheduleAutoCapture(1800));
  window.addEventListener("popstate", () => scheduleAutoCapture(1800));
  scheduleAutoCapture(1800);

  observer = new MutationObserver((mutations) => {
    if (mutations.length > 0 && mutations.every(isEditorMutation)) return;
    scheduleAutoCapture();
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
