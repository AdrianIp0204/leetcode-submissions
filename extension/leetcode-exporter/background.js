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

async function downloadOne(relativePath, contents, contentType = "text/plain") {
  const url = `data:${contentType};charset=utf-8,${encodeURIComponent(contents)}`;
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

function timestampForFilename() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

async function downloadExportBundle(exports, reason = "manual") {
  if (!exports.length) return null;

  const bundle = {
    schema: "leetcode-submissions.export-bundle.v1",
    exportedAt: new Date().toISOString(),
    reason,
    exports,
  };
  const digest = hashString(JSON.stringify(exports.map((payload) => payload.key || exportKey(payload))));
  const filename = `queue/leetcode-exports-${timestampForFilename()}-${digest}.json`;

  return downloadOne(filename, `${JSON.stringify(bundle, null, 2)}\n`, "application/json");
}

function pendingHandoffExports(exportsByKey) {
  return Object.values(exportsByKey).filter((payload) => !payload.handedOffAt);
}

function markHandedOff(exportsByKey, exports, reason) {
  const handedOffAt = new Date().toISOString();
  const next = { ...exportsByKey };

  for (const payload of exports) {
    if (!payload?.key || !next[payload.key]) continue;
    next[payload.key] = {
      ...next[payload.key],
      handedOffAt,
      handoffReason: reason,
    };
  }

  return next;
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

  let nextExportsByKey = next;
  let autoDownloaded = 0;
  let autoDownloadError = "";

  if (settings.autoDownload) {
    const pending = pendingHandoffExports(nextExportsByKey);
    if (pending.length) {
      try {
        const bundleId = await downloadExportBundle(pending, reason);
        if (bundleId) {
          nextExportsByKey = markHandedOff(nextExportsByKey, pending, reason);
          autoDownloaded = pending.length;
        }
      } catch (error) {
        autoDownloadError = error.message || String(error);
      }
    }
  }

  await storageSet({
    exportsByKey: nextExportsByKey,
    lastAutoDownloadError: autoDownloadError || null,
    lastAutoDownloadErrorAt: autoDownloadError ? new Date().toISOString() : null,
  });

  return {
    added: added.length,
    skipped: skipped.length,
    total: Object.keys(nextExportsByKey).length,
    pendingHandoff: pendingHandoffExports(nextExportsByKey).length,
    autoDownloaded,
    autoDownloadError,
  };
}

async function getState() {
  const settings = await storageGet({
    ...DEFAULT_SETTINGS,
    lastAutoDownloadError: null,
    lastAutoDownloadErrorAt: null,
  });
  const exportsByKey = await getExportsByKey();
  const exports = Object.values(exportsByKey).sort((left, right) =>
    String(right.queuedAt || "").localeCompare(String(left.queuedAt || "")),
  );

  return {
    settings,
    count: exports.length,
    pendingHandoffCount: pendingHandoffExports(exportsByKey).length,
    lastAutoDownloadError: settings.lastAutoDownloadError,
    lastAutoDownloadErrorAt: settings.lastAutoDownloadErrorAt,
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
      const bundleId = await downloadExportBundle(exports, "manual-queue-download");
      if (bundleId) {
        await storageSet({
          exportsByKey: markHandedOff(exportsByKey, exports, "manual-queue-download"),
          lastAutoDownloadError: null,
          lastAutoDownloadErrorAt: null,
        });
      }
      return { downloaded: exports.length, bundles: bundleId ? 1 : 0 };
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
