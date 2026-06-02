let currentExport = null;

const elements = {
  collect: document.getElementById("collect"),
  history: document.getElementById("history"),
  historyLimit: document.getElementById("historyLimit"),
  autoCapture: document.getElementById("autoCapture"),
  autoDownload: document.getElementById("autoDownload"),
  result: document.getElementById("result"),
  problem: document.getElementById("problem"),
  status: document.getElementById("status"),
  path: document.getElementById("path"),
  save: document.getElementById("save"),
  download: document.getElementById("download"),
  copy: document.getElementById("copy"),
  commands: document.getElementById("commands"),
  saveQueue: document.getElementById("saveQueue"),
  downloadQueue: document.getElementById("downloadQueue"),
  clearQueue: document.getElementById("clearQueue"),
  queueCount: document.getElementById("queueCount"),
  message: document.getElementById("message"),
};

function setMessage(value) {
  elements.message.textContent = value;
}

function setBusy(isBusy) {
  elements.collect.disabled = isBusy;
  elements.history.disabled = isBusy;
  elements.save.disabled = isBusy || !currentExport;
  elements.download.disabled = isBusy || !currentExport;
  elements.copy.disabled = isBusy || !currentExport;
  elements.commands.disabled = isBusy || !currentExport;
  elements.saveQueue.disabled = isBusy;
  elements.downloadQueue.disabled = isBusy;
  elements.clearQueue.disabled = isBusy;
}

function sendRuntimeMessage(message) {
  return chrome.runtime.sendMessage(message).then((response) => {
    if (!response?.ok) throw new Error(response?.error || "Extension background task failed.");
    return response.payload;
  });
}

async function refreshState() {
  const state = await sendRuntimeMessage({ type: "get-state" });
  elements.autoCapture.checked = Boolean(state.settings.autoCapture);
  elements.autoDownload.checked = Boolean(state.settings.autoDownload);
  elements.queueCount.textContent = String(state.count || 0);
  return state;
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) throw new Error("No active tab found.");
  return tab;
}

function isMissingContentScriptError(error) {
  return /receiving end does not exist|could not establish connection/i.test(
    error?.message || String(error),
  );
}

async function injectContentScript(tabId) {
  if (!chrome.scripting?.executeScript) {
    throw new Error("Reload the extension from chrome://extensions, then refresh the LeetCode tab.");
  }

  await chrome.scripting.executeScript({
    target: { tabId },
    files: ["content.js"],
  });
}

async function sendTabMessageOnce(tab, message) {
  if (!/^https:\/\/(www\.)?leetcode\.com\//.test(tab.url || "")) {
    throw new Error("Open a LeetCode page first.");
  }

  const response = await chrome.tabs.sendMessage(tab.id, message);
  if (!response?.ok) throw new Error(response?.error || "The page did not return a solution.");
  return response.payload;
}

async function sendTabMessage(message) {
  const tab = await getActiveTab();

  try {
    return await sendTabMessageOnce(tab, message);
  } catch (error) {
    if (!isMissingContentScriptError(error)) throw error;

    await injectContentScript(tab.id);
    return sendTabMessageOnce(tab, message);
  }
}

async function collectCurrentSolution() {
  setBusy(true);
  setMessage("Reading the current LeetCode page...");

  try {
    currentExport = await sendTabMessage({ type: "collect-solution" });
    elements.problem.textContent = currentExport.title;
    elements.status.textContent = currentExport.status;
    elements.path.textContent = currentExport.path;
    elements.result.hidden = false;

    const stored = await sendRuntimeMessage({
      type: "store-exports",
      payload: { exports: [currentExport], reason: "manual-current" },
    });
    await refreshState();

    if (currentExport.status !== "Accepted") {
      setMessage("Collected code. Status was not clearly Accepted, so review before committing.");
    } else if (stored.autoDownloaded) {
      setMessage("Collected accepted solution and handed it to local sync.");
    } else {
      setMessage("Collected accepted solution and queued it.");
    }
  } catch (error) {
    currentExport = null;
    elements.result.hidden = true;
    setMessage(error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function collectPastAccepted() {
  setBusy(true);
  setMessage("Fetching accepted submission history...");

  try {
    const limit = Number(elements.historyLimit.value || 100);
    const result = await sendTabMessage({
      type: "collect-history",
      payload: { limit },
    });
    const stored = await sendRuntimeMessage({
      type: "store-exports",
      payload: { exports: result.exports, reason: "history-backfill" },
    });
    await refreshState();

    setMessage(
      `Scanned ${result.scanned} submissions; added ${stored.added}, skipped ${stored.skipped}. ${
        stored.autoDownloaded ? "Handed new exports to local sync." : ""
      }`.trim(),
    );
  } catch (error) {
    setMessage(error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function writeNestedFile(rootHandle, relativePath, contents) {
  const parts = relativePath.split("/").filter(Boolean);
  const filename = parts.pop();
  let directory = rootHandle;

  for (const part of parts) {
    directory = await directory.getDirectoryHandle(part, { create: true });
  }

  const file = await directory.getFileHandle(filename, { create: true });
  const writable = await file.createWritable();
  await writable.write(contents);
  await writable.close();
}

async function saveExportsToRepoFolder(exports) {
  if (!window.showDirectoryPicker) {
    throw new Error("Folder saving is unavailable here. Use Download Queue instead.");
  }

  const root = await window.showDirectoryPicker({ mode: "readwrite" });
  for (const payload of exports) {
    await writeNestedFile(root, payload.path, `${payload.code}\n`);
    await writeNestedFile(root, payload.readmePath, payload.readme);
  }

  return exports.length;
}

async function saveToRepoFolder() {
  if (!currentExport) return;
  setBusy(true);
  setMessage("Choose the cloned leetcode-submissions repo root.");

  try {
    const count = await saveExportsToRepoFolder([currentExport]);
    setMessage(`Saved ${count} export into the selected repo folder.`);
  } catch (error) {
    setMessage(error.name === "AbortError" ? "Save cancelled." : error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function saveQueueToRepoFolder() {
  setBusy(true);
  setMessage("Choose the cloned leetcode-submissions repo root.");

  try {
    const state = await refreshState();
    const count = await saveExportsToRepoFolder(state.exports || []);
    setMessage(`Saved ${count} queued exports into the selected repo folder.`);
  } catch (error) {
    setMessage(error.name === "AbortError" ? "Save cancelled." : error.message || String(error));
  } finally {
    setBusy(false);
  }
}

function downloadOne(filename, contents) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([contents], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download(
      {
        url,
        filename: `leetcode-submissions/${filename}`,
        saveAs: false,
        conflictAction: "overwrite",
      },
      (downloadId) => {
        window.setTimeout(() => URL.revokeObjectURL(url), 5000);
        const error = chrome.runtime.lastError;
        if (error) reject(new Error(error.message));
        else resolve(downloadId);
      },
    );
  });
}

async function downloadFiles() {
  if (!currentExport) return;
  setBusy(true);
  setMessage("Downloading files...");

  try {
    await downloadOne(currentExport.path, `${currentExport.code}\n`);
    await downloadOne(currentExport.readmePath, currentExport.readme);
    setMessage("Downloaded solution and README under Downloads/leetcode-submissions.");
  } catch (error) {
    setMessage(error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function downloadQueue() {
  setBusy(true);
  setMessage("Creating a local-sync handoff bundle...");

  try {
    const result = await sendRuntimeMessage({ type: "download-exports" });
    if (result.bundles) {
      setMessage(`Handed ${result.downloaded} queued exports to local sync.`);
    } else {
      setMessage("No queued exports to hand off.");
    }
  } catch (error) {
    setMessage(error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function clearQueue() {
  setBusy(true);

  try {
    await sendRuntimeMessage({ type: "clear-exports" });
    await refreshState();
    setMessage("Cleared queued exports.");
  } catch (error) {
    setMessage(error.message || String(error));
  } finally {
    setBusy(false);
  }
}

async function copySolution() {
  if (!currentExport) return;
  await navigator.clipboard.writeText(currentExport.code);
  setMessage("Copied solution code.");
}

async function copyGitCommands() {
  if (!currentExport) return;
  const folder = currentExport.path.split("/").slice(0, -1).join("/");
  const commitMessage = `Add ${currentExport.title}`.replace(/'/g, "'\\''");
  const commands = [
    `mkdir -p "${folder}"`,
    `git add "${folder}"`,
    `git commit -m '${commitMessage}'`,
    "git push",
  ].join("\n");

  await navigator.clipboard.writeText(commands);
  setMessage("Copied git commands for the saved files.");
}

async function saveSettings() {
  await sendRuntimeMessage({
    type: "set-settings",
    payload: {
      autoCapture: elements.autoCapture.checked,
      autoDownload: elements.autoDownload.checked,
    },
  });
  await refreshState();
  setMessage("Updated extension settings.");
}

elements.collect.addEventListener("click", collectCurrentSolution);
elements.history.addEventListener("click", collectPastAccepted);
elements.save.addEventListener("click", saveToRepoFolder);
elements.download.addEventListener("click", downloadFiles);
elements.copy.addEventListener("click", copySolution);
elements.commands.addEventListener("click", copyGitCommands);
elements.saveQueue.addEventListener("click", saveQueueToRepoFolder);
elements.downloadQueue.addEventListener("click", downloadQueue);
elements.clearQueue.addEventListener("click", clearQueue);
elements.autoCapture.addEventListener("change", saveSettings);
elements.autoDownload.addEventListener("change", saveSettings);

setBusy(false);
refreshState().catch((error) => setMessage(error.message || String(error)));
