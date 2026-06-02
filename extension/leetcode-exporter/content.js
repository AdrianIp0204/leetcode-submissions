(() => {
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

  function findAcceptedStatus() {
    const body = document.body?.textContent || "";
    if (/\bAccepted\b/.test(body)) return "Accepted";
    if (/\bWrong Answer\b/.test(body)) return "Wrong Answer";
    if (/\bRuntime Error\b/.test(body)) return "Runtime Error";
    if (/\bTime Limit Exceeded\b/.test(body)) return "Time Limit Exceeded";
    return "Unknown";
  }

  function normalizeLanguage(value, source) {
    const raw = String(value || "").trim();
    const lower = raw.toLowerCase().replace(/\s+/g, "");
    if (!lower && source.includes("class Solution")) return "cpp";
    if (!lower && source.includes("def ") && source.includes("self")) return "python3";
    if (lower === "python") return "python3";
    if (lower === "python3") return "python3";
    if (lower === "c++") return "cpp";
    if (lower === "golang") return "go";
    return lower || "txt";
  }

  function findLanguage(pagePayload, source) {
    const modelLanguage = pagePayload?.model?.languageId;
    const visibleLanguage = [
      text('[data-cy="lang-select"]'),
      text("button[aria-haspopup='listbox']"),
      text("[class*='lang']"),
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

  function buildReadme({ title, problemUrl, language, status, exportedAt }) {
    return [
      `# ${title}`,
      "",
      `- LeetCode: ${problemUrl}`,
      `- Language: ${language}`,
      `- Exported at: ${exportedAt}`,
      `- Submission status seen by extension: ${status}`,
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
    const folderPrefix = frontendId ? frontendId.padStart(4, "0") : "0000";
    const folder = `${folderPrefix}-${slug || sanitizeSlug(title) || "leetcode-solution"}`;
    const language = findLanguage(pagePayload, source);
    const extension = languageExtensions[language] || "txt";
    const status = findAcceptedStatus();
    const exportedAt = new Date().toISOString();
    const problemUrl = slug ? `https://leetcode.com/problems/${slug}/` : location.href;

    return {
      source: SOURCE,
      title,
      slug,
      frontendId,
      language,
      status,
      exportedAt,
      problemUrl,
      path: `submissions/${folder}/solution.${extension}`,
      readmePath: `submissions/${folder}/README.md`,
      code: source,
      readme: buildReadme({ title, problemUrl, language, status, exportedAt }),
    };
  }

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type !== "collect-solution") return false;

    collectSolution()
      .then((payload) => sendResponse({ ok: true, payload }))
      .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));

    return true;
  });
})();
