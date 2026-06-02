let currentExport = null;

const elements = {
  collect: document.getElementById("collect"),
  result: document.getElementById("result"),
  problem: document.getElementById("problem"),
  status: document.getElementById("status"),
  path: document.getElementById("path"),
  save: document.getElementById("save"),
  download: document.getElementById("download"),
  copy: document.getElementById("copy"),
  commands: document.getElementById("commands"),
  message: document.getElementById("message"),
};

function setMessage(value) {
  elements.message.textContent = value;
}

function setBusy(isBusy) {
  elements.collect.disabled = isBusy;
  elements.save.disabled = isBusy || !currentExport;
  elements.download.disabled = isBusy || !currentExport;
  elements.copy.disabled = isBusy || !currentExport;
  elements.commands.disabled = isBusy || !currentExport;
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) throw new Error("No active tab found.");
  return tab;
}

async function collectCurrentSolution() {
  setBusy(true);
  setMessage("Reading the current LeetCode page...");

  try {
    const tab = await getActiveTab();
    if (!/^https:\/\/(www\.)?leetcode\.com\//.test(tab.url || "")) {
      throw new Error("Open a LeetCode page first.");
    }

    const response = await chrome.tabs.sendMessage(tab.id, { type: "collect-solution" });
    if (!response?.ok) throw new Error(response?.error || "The page did not return a solution.");

    currentExport = response.payload;
    elements.problem.textContent = currentExport.title;
    elements.status.textContent = currentExport.status;
    elements.path.textContent = currentExport.path;
    elements.result.hidden = false;

    if (currentExport.status !== "Accepted") {
      setMessage("Collected code. Status was not clearly Accepted, so review before committing.");
    } else {
      setMessage("Collected accepted solution.");
    }
  } catch (error) {
    currentExport = null;
    elements.result.hidden = true;
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

async function saveToRepoFolder() {
  if (!currentExport) return;
  if (!window.showDirectoryPicker) {
    setMessage("Folder saving is unavailable here. Use Download Files instead.");
    return;
  }

  setBusy(true);
  setMessage("Choose the cloned leetcode-submissions repo root.");

  try {
    const root = await window.showDirectoryPicker({ mode: "readwrite" });
    await writeNestedFile(root, currentExport.path, `${currentExport.code}\n`);
    await writeNestedFile(root, currentExport.readmePath, currentExport.readme);
    setMessage("Saved solution and README into the selected repo folder.");
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

elements.collect.addEventListener("click", collectCurrentSolution);
elements.save.addEventListener("click", saveToRepoFolder);
elements.download.addEventListener("click", downloadFiles);
elements.copy.addEventListener("click", copySolution);
elements.commands.addEventListener("click", copyGitCommands);

setBusy(false);
