const DEFAULT_SETTINGS = {
  autoCapture: true,
  autoDownload: true,
};

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function exportKey(payload) {
  return `${payload.path}:${hashString(payload.code || "")}`;
}

function storageGet(defaults) {
  return chrome.storage.local.get(defaults);
}

function storageSet(values) {
  return chrome.storage.local.set(values);
}

async function getExportsByKey() {
  const { exportsByKey = {} } = await storageGet({ exportsByKey: {} });
  return exportsByKey;
}

async function downloadOne(relativePath, contents) {
  const url = `data:text/plain;charset=utf-8,${encodeURIComponent(contents)}`;
  return new Promise((resolve, reject) => {
    chrome.downloads.download(
      {
        url,
        filename: `leetcode-submissions/${relativePath}`,
        saveAs: false,
        conflictAction: "overwrite",
      },
      (downloadId) => {
        const error = chrome.runtime.lastError;
        if (error) reject(new Error(error.message));
        else resolve(downloadId);
      },
    );
  });
}

async function downloadExport(payload) {
  await downloadOne(payload.path, `${payload.code || ""}\n`);
  await downloadOne(payload.readmePath, payload.readme || "");
}

async function addExports(exports, reason = "manual") {
  const existing = await getExportsByKey();
  const next = { ...existing };
  const settings = await storageGet(DEFAULT_SETTINGS);
  const added = [];
  const skipped = [];

  for (const payload of exports.filter(Boolean)) {
    if (!payload.path || !payload.code) continue;
    const key = payload.key || exportKey(payload);
    if (next[key]) {
      skipped.push(payload);
      continue;
    }

    const savedPayload = {
      ...payload,
      key,
      queuedAt: new Date().toISOString(),
      queueReason: reason,
    };
    next[key] = savedPayload;
    added.push(savedPayload);
  }

  await storageSet({ exportsByKey: next });

  if (settings.autoDownload) {
    for (const payload of added) {
      await downloadExport(payload);
    }
  }

  return {
    added: added.length,
    skipped: skipped.length,
    total: Object.keys(next).length,
    autoDownloaded: settings.autoDownload ? added.length : 0,
  };
}

async function getState() {
  const settings = await storageGet(DEFAULT_SETTINGS);
  const exportsByKey = await getExportsByKey();
  const exports = Object.values(exportsByKey).sort((left, right) =>
    String(right.queuedAt || "").localeCompare(String(left.queuedAt || "")),
  );

  return {
    settings,
    count: exports.length,
    exports,
  };
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(DEFAULT_SETTINGS, (current) => {
    chrome.storage.local.set({
      autoCapture: current.autoCapture ?? DEFAULT_SETTINGS.autoCapture,
      autoDownload: current.autoDownload ?? DEFAULT_SETTINGS.autoDownload,
    });
  });
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  async function handle() {
    if (message?.type === "auto-captured-solution") {
      return addExports([message.payload], "auto-capture");
    }

    if (message?.type === "store-exports") {
      return addExports(message.payload?.exports || [], message.payload?.reason || "manual");
    }

    if (message?.type === "get-state") {
      return getState();
    }

    if (message?.type === "set-settings") {
      await storageSet(message.payload || {});
      return getState();
    }

    if (message?.type === "download-exports") {
      const exportsByKey = await getExportsByKey();
      const exports = Object.values(exportsByKey);
      for (const payload of exports) {
        await downloadExport(payload);
      }
      return { downloaded: exports.length };
    }

    if (message?.type === "clear-exports") {
      await storageSet({ exportsByKey: {} });
      return { cleared: true };
    }

    throw new Error(`Unknown message type: ${message?.type || "missing"}`);
  }

  handle()
    .then((payload) => sendResponse({ ok: true, payload }))
    .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));

  return true;
});
