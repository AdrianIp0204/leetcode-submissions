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

  const submissionStatuses = [
    "Wrong Answer",
    "Runtime Error",
    "Time Limit Exceeded",
    "Memory Limit Exceeded",
    "Compile Error",
    "Output Limit Exceeded",
    "Presentation Error",
    "Internal Error",
    "Accepted",
  ];

  function regexEscape(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function findStatusInText(value) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    if (!text) return "";

    const matches = submissionStatuses
      .map((status) => {
        const match = text.match(new RegExp(`\\b${regexEscape(status)}\\b`, "i"));
        return match ? { status, index: match.index ?? 0 } : null;
      })
      .filter(Boolean)
      .sort((left, right) => left.index - right.index);

    return matches[0]?.status || "";
  }

  function findVisibleSubmissionStatus() {
    const exactStatusElements = [...document.querySelectorAll("div,span,p,h3")].filter((element) => {
      const value = element.textContent?.replace(/\s+/g, " ").trim() || "";
      return value.length > 0 && value.length <= 60;
    });

    for (const element of exactStatusElements) {
      const value = element.textContent?.replace(/\s+/g, " ").trim() || "";
      const status = submissionStatuses.find(
        (candidate) => candidate.toLowerCase() === value.toLowerCase(),
      );
      if (!status) continue;

      let current = element;
      for (let depth = 0; current && depth < 5; depth += 1) {
        const context = current.textContent?.replace(/\s+/g, " ").trim() || "";
        if (
          /runtime|memory|testcase|stdout|input|output|expected|submission|result/i.test(context) ||
          /\/submissions(\/|$)/.test(location.pathname)
        ) {
          return status;
        }
        current = current.parentElement;
      }
    }

    const resultSelectors = [
      "[data-e2e-locator*='submission']",
      "[data-e2e-locator*='result']",
      "[data-cy*='submission']",
      "[data-cy*='result']",
      "[class*='submission']",
      "[class*='result']",
      "[class*='judge']",
      "[class*='runtime']",
      "[class*='memory']",
    ];

    for (const selector of resultSelectors) {
      for (const element of document.querySelectorAll(selector)) {
        const value = element.textContent?.replace(/\s+/g, " ").trim() || "";
        if (!value || value.length > 1200) continue;
        const status = findStatusInText(value);
        if (!status) continue;
        if (
          /runtime|memory|testcase|stdout|input|output|expected|submission|result/i.test(value) ||
          /\/submissions(\/|$)/.test(location.pathname)
        ) {
          return status;
        }
      }
    }

    return "Unknown";
  }

  function findSubmissionIdFromLocation() {
    return (
      location.pathname.match(/\/submissions\/(?:detail\/)?(\d+)/)?.[1] ||
      location.pathname.match(/\/problems\/[^/]+\/submissions\/(\d+)/)?.[1] ||
      ""
    );
  }

  function findSubmissionAutoSignal() {
    const status = findVisibleSubmissionStatus();
    if (status === "Unknown") return "";

    const submissionId = findSubmissionIdFromLocation();
    if (submissionId) return `submission:${submissionId}`;

    const statusElements = [...document.querySelectorAll("div,span,p,h3")].filter((element) => {
      const value = element.textContent?.replace(/\s+/g, " ").trim() || "";
      return value.toLowerCase() === status.toLowerCase();
    });

    for (const element of statusElements) {
      let current = element;
      for (let depth = 0; current && depth < 5; depth += 1) {
        const value = current.textContent?.replace(/\s+/g, " ").trim() || "";
        if (
          value.includes(status) &&
          /runtime|memory|testcase|stdout|input|output|expected/i.test(value)
        ) {
          return `result:${findProblemSlug()}:${hashString(value.slice(0, 500))}`;
        }
        current = current.parentElement;
      }
    }

    return `result:${findProblemSlug()}:${sanitizeSlug(status)}`;
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

  function buildReadme({
    title,
    problemUrl,
    language,
    status,
    exportedAt,
    submittedAt,
    submissionId,
    difficulty,
    tags = [],
    runtime,
    memory,
  }) {
    const lines = [
      `# ${title}`,
      "",
      `- LeetCode: ${problemUrl}`,
      `- Language: ${language}`,
      `- Exported at: ${exportedAt}`,
      `- Submission status seen by extension: ${status}`,
    ];

    if (difficulty) lines.push(`- Difficulty: ${difficulty}`);
    if (tags.length) lines.push(`- Tags: ${tags.join(", ")}`);
    if (runtime) lines.push(`- Runtime: ${runtime}`);
    if (memory) lines.push(`- Memory: ${memory}`);
    if (submittedAt) lines.push(`- Submitted at: ${submittedAt}`);
    if (submissionId) lines.push(`- Submission ID: ${submissionId}`);

    return [
      ...lines,
      "",
      "## Pattern",
      "",
      "TODO",
      "",
      "## Key Idea",
      "",
      "TODO",
      "",
      "## Mistake / Edge Case",
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

  function isAcceptedStatus(status) {
    return /^accepted$/i.test(String(status || ""));
  }

  function attemptKey({ status, exportedAt, submittedAt, submissionId }) {
    const id = submissionId ? `submission-${submissionId}` : submittedAt || exportedAt;
    return `${String(id || "unknown")
      .replace(/[:.]/g, "-")
      .replace(/[^a-zA-Z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)}-${sanitizeSlug(status || "unknown") || "unknown"}`;
  }

  function buildExport({
    source,
    title,
    slug,
    frontendId,
    language,
    status,
    exportedAt,
    submittedAt,
    problemUrl,
    code,
    submissionId,
    difficulty,
    tags = [],
    runtime,
    memory,
  }) {
    const folderPrefix = frontendId ? String(frontendId).padStart(4, "0") : "0000";
    const folder = `${folderPrefix}-${slug || sanitizeSlug(title) || "leetcode-solution"}`;
    const extension = languageExtensions[language] || "txt";
    const basePath = `submissions/${folder}`;
    const targetDir = isAcceptedStatus(status)
      ? basePath
      : `${basePath}/attempts/${attemptKey({ status, exportedAt, submittedAt, submissionId })}`;
    const path = `${targetDir}/solution.${extension}`;

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
      difficulty,
      tags,
      runtime,
      memory,
      problemUrl,
      path,
      readmePath: `${targetDir}/README.md`,
      code,
      readme: buildReadme({
        title,
        problemUrl,
        language,
        status,
        exportedAt,
        submittedAt,
        submissionId,
        difficulty,
        tags,
        runtime,
        memory,
      }),
      key: `${path}:${hashString(code || "")}`,
    };
  }

  function tagNames(question) {
    return (question?.topicTags || [])
      .map((tag) => tag?.name)
      .filter(Boolean);
  }

  async function collectSolution() {
    if (!location.hostname.endsWith("leetcode.com")) {
      throw new Error("Open a LeetCode page first.");
    }

    const submissionId = findSubmissionIdFromLocation();
    if (submissionId) return collectSubmissionById(submissionId);

    if (findVisibleSubmissionStatus() !== "Unknown") {
      try {
        return await collectLatestSubmissionForPage();
      } catch {
        // Fall back to the visible editor/code extraction path below.
      }
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
    const status = findVisibleSubmissionStatus();
    const exportedAt = new Date().toISOString();
    const metadata = slug ? await fetchQuestionMetadata(slug).catch(() => null) : null;
    const problemUrl = slug ? `https://leetcode.com/problems/${slug}/` : location.href;

    return buildExport({
      source: SOURCE,
      title: metadata?.title || title,
      slug: metadata?.titleSlug || slug,
      frontendId: metadata?.questionFrontendId || frontendId,
      language,
      status,
      exportedAt,
      problemUrl,
      code: source,
      difficulty: metadata?.difficulty || "",
      tags: tagNames(metadata),
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
        difficulty
        topicTags {
          name
          slug
        }
      }
      lang {
        name
        verboseName
      }
    }
  }`;

  const questionMetadataQuery = `query questionMetadata($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionFrontendId
      title
      titleSlug
      difficulty
      topicTags {
        name
        slug
      }
    }
  }`;

  async function fetchQuestionMetadata(titleSlug) {
    const data = await fetchLeetCodeGraphql(questionMetadataQuery, { titleSlug });
    return data.question || null;
  }

  function exportFromSubmission(summary, details) {
    const code = String(details?.code || "").trimEnd();
    if (!code) return null;

    const question = details?.question || {};
    const title = question.title || summary.title || "LeetCode Solution";
    const slug = sanitizeSlug(question.titleSlug || summary.titleSlug || title);
    const frontendId = question.questionFrontendId || "";
    const language = normalizeLanguage(details?.lang?.name || details?.lang?.verboseName || summary.lang, code);
    const status = details?.statusDisplay || summary.statusDisplay || "Unknown";
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
      difficulty: question.difficulty || "",
      tags: tagNames(question),
      runtime: details?.runtime || "",
      memory: details?.memory || "",
    });
  }

  async function collectSubmissionById(submissionId) {
    const detailsData = await fetchLeetCodeGraphql(submissionDetailsQuery, {
      submissionId: Number(submissionId),
    });
    const exported = exportFromSubmission({ id: submissionId }, detailsData.submissionDetails);
    if (!exported) throw new Error("Could not read the submission code.");
    return exported;
  }

  async function collectLatestSubmissionForPage({ acceptedOnly = false } = {}) {
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

    const sortedSubmissions = [...submissions].sort(
      (left, right) => Number(right.timestamp || 0) - Number(left.timestamp || 0),
    );
    const selected = acceptedOnly
      ? sortedSubmissions.find((submission) => submission.statusDisplay === "Accepted")
      : sortedSubmissions[0];
    if (!selected) {
      throw new Error(
        acceptedOnly
          ? "No accepted submission was found for this problem yet."
          : "No submission was found for this problem yet.",
      );
    }

    const detailsData = await fetchLeetCodeGraphql(submissionDetailsQuery, {
      submissionId: Number(selected.id),
    });
    const exported = exportFromSubmission(selected, detailsData.submissionDetails);
    if (!exported) throw new Error("Could not read the latest submission code.");
    return exported;
  }

  async function collectLatestAcceptedSubmissionForPage() {
    return collectLatestSubmissionForPage({ acceptedOnly: true });
  }

  async function collectAutoSubmission() {
    const submissionId = findSubmissionIdFromLocation();
    if (submissionId) return collectSubmissionById(submissionId);
    return collectLatestSubmissionForPage();
  }

  function sleep(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  async function collectAcceptedHistory({ limit = 100, attemptLimit = 25 } = {}) {
    const maxAccepted = Math.max(1, Math.min(Number(limit) || 100, 300));
    const maxAttempts = Math.max(0, Math.min(Number(attemptLimit) || 0, 100));
    const pageLimit = 20;
    const acceptedExports = [];
    const attemptExports = [];
    const seenIds = new Set();
    let offset = 0;
    let lastKey = null;
    let scanned = 0;

    for (
      let page = 0;
      page < 25 && (acceptedExports.length < maxAccepted || attemptExports.length < maxAttempts);
      page += 1
    ) {
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
        if (seenIds.has(submission.id)) continue;

        const accepted = submission.statusDisplay === "Accepted";
        if (accepted && acceptedExports.length >= maxAccepted) continue;
        if (!accepted && attemptExports.length >= maxAttempts) continue;

        seenIds.add(submission.id);

        const detailsData = await fetchLeetCodeGraphql(submissionDetailsQuery, {
          submissionId: Number(submission.id),
        });
        const exported = exportFromSubmission(submission, detailsData.submissionDetails);
        if (exported) {
          if (accepted) acceptedExports.push(exported);
          else attemptExports.push(exported);
        }
        await sleep(250);
      }

      if (!list.hasNext) break;
      offset += pageLimit;
      lastKey = list.lastKey || null;
    }

    return {
      scanned,
      accepted: acceptedExports.length,
      attempts: attemptExports.length,
      exports: [...acceptedExports, ...attemptExports],
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
  let lastSubmitActionAt = 0;
  let lastLocationHref = location.href;
  const AUTO_CAPTURE_MIN_CHECK_MS = 15_000;
  const AUTO_CAPTURE_RECENT_SUBMIT_MIN_CHECK_MS = 2_500;
  const AUTO_CAPTURE_SUBMIT_WINDOW_MS = 120_000;
  const AUTO_CAPTURE_SUBMISSION_CLOCK_SKEW_MS = 20_000;
  const AUTO_CAPTURE_RECENT_ACCEPTED_WINDOW_MS = 10 * 60_000;
  const AUTO_CAPTURE_SUBMIT_PROBE_DELAYS_MS = [2500, 7000, 15000, 30000, 60000, 90000, 120000];

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

  function isSubmissionDetailPage() {
    return Boolean(findSubmissionIdFromLocation());
  }

  function isRecentSubmitWindow(now = Date.now()) {
    return lastSubmitActionAt > 0 && now - lastSubmitActionAt < AUTO_CAPTURE_SUBMIT_WINDOW_MS;
  }

  function submittedAtMs(payload) {
    const value = Date.parse(payload?.submittedAt || "");
    return Number.isFinite(value) ? value : 0;
  }

  function isFreshAutoPayload(payload, now = Date.now()) {
    if (isSubmissionDetailPage()) return true;

    const submittedAt = submittedAtMs(payload);
    if (!submittedAt) return false;
    if (isRecentSubmitWindow(now)) {
      return submittedAt >= lastSubmitActionAt - AUTO_CAPTURE_SUBMISSION_CLOCK_SKEW_MS;
    }

    return (
      isAcceptedStatus(payload?.status) &&
      now - submittedAt <= AUTO_CAPTURE_RECENT_ACCEPTED_WINDOW_MS
    );
  }

  function shouldProbeAutoSignal(autoSignal, now = Date.now()) {
    if (isSubmissionDetailPage() || isRecentSubmitWindow(now)) return true;
    return autoSignal !== lastAutoSignal || now - lastAutoCheckAt >= AUTO_CAPTURE_MIN_CHECK_MS;
  }

  function rememberAutoSignal(autoSignal, now = Date.now()) {
    lastAutoSignal = autoSignal;
    lastAutoCheckAt = now;
  }

  function looksLikeSubmitControl(target) {
    const element = target instanceof Element ? target : target?.parentElement;
    const control = element?.closest?.("button,[role='button'],a");
    if (!control) return false;

    const label = [
      control.textContent,
      control.getAttribute("aria-label"),
      control.getAttribute("title"),
      control.getAttribute("data-e2e-locator"),
      control.getAttribute("data-cy"),
    ]
      .filter(Boolean)
      .join(" ");

    return /\bsubmit\b/i.test(label);
  }

  function noteSubmitAction() {
    lastSubmitActionAt = Date.now();
    lastAutoCheckAt = 0;
    for (const delay of AUTO_CAPTURE_SUBMIT_PROBE_DELAYS_MS) {
      window.setTimeout(() => scheduleAutoCapture(0), delay);
    }
  }

  async function maybeAutoCapture() {
    if (autoCaptureStopped) return;
    try {
      const settings = await chrome.storage.local.get({ autoCapture: true });
      if (!settings.autoCapture) return;

      const autoSignal = findSubmissionAutoSignal();
      if (!autoSignal) return;

      const now = Date.now();
      if (!shouldProbeAutoSignal(autoSignal, now)) return;

      const minCheckMs = isRecentSubmitWindow(now)
        ? AUTO_CAPTURE_RECENT_SUBMIT_MIN_CHECK_MS
        : AUTO_CAPTURE_MIN_CHECK_MS;
      if (autoSignal === lastAutoSignal && now - lastAutoCheckAt < minCheckMs) {
        return;
      }
      rememberAutoSignal(autoSignal, now);

      const payload = await collectAutoSubmission();
      if (!isFreshAutoPayload(payload, now)) return;
      const autoKey = payload.submissionId ? `submission:${payload.submissionId}` : payload.key;
      if (autoKey === lastAutoKey) return;
      lastAutoKey = autoKey;
      lastSubmitActionAt = 0;
      chrome.runtime.sendMessage({ type: "auto-captured-solution", payload }, (response) => {
        const error = chrome.runtime.lastError;
        if (error || !response?.ok || response?.payload?.autoDownloadError) {
          lastAutoKey = "";
          scheduleAutoCapture(AUTO_CAPTURE_RECENT_SUBMIT_MIN_CHECK_MS);
        }
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

  function noteLocationChange() {
    if (location.href === lastLocationHref) return;
    lastLocationHref = location.href;
    lastAutoSignal = "";
    lastAutoCheckAt = 0;
    scheduleAutoCapture(900);
  }

  function patchHistoryMethod(methodName) {
    const original = history[methodName];
    if (typeof original !== "function") return;

    history[methodName] = function patchedHistoryMethod(...args) {
      const result = original.apply(this, args);
      window.dispatchEvent(new Event("leetcode-repo-exporter-locationchange"));
      return result;
    };
  }

  document.addEventListener(
    "click",
    (event) => {
      if (looksLikeSubmitControl(event.target)) noteSubmitAction();
    },
    true,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") noteSubmitAction();
    },
    true,
  );

  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");

  window.addEventListener("load", () => scheduleAutoCapture(1800));
  window.addEventListener("popstate", () => {
    noteLocationChange();
    scheduleAutoCapture(1800);
  });
  window.addEventListener("hashchange", noteLocationChange);
  window.addEventListener("leetcode-repo-exporter-locationchange", noteLocationChange);
  scheduleAutoCapture(1800);
  window.setInterval(() => scheduleAutoCapture(0), 30_000);

  observer = new MutationObserver((mutations) => {
    noteLocationChange();
    if (mutations.length > 0 && mutations.every(isEditorMutation)) return;
    scheduleAutoCapture();
  });
  observer.observe(document.documentElement, {
    characterData: true,
    childList: true,
    subtree: true,
  });
})();
