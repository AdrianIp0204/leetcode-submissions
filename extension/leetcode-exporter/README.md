# LeetCode Repo Exporter

First-party browser extension for saving the solution visible in your LeetCode browser tab into this repo.

It is intentionally boring:

- Runs only on `leetcode.com`.
- Does not store or read LeetCode cookies.
- Does not use a GitHub token.
- Does not make network requests.
- Saves files only when you click a button.

## Install In Chrome Or Edge

1. Clone or download this private repo on the computer where you solve LeetCode.
2. Open `chrome://extensions` or `edge://extensions`.
3. Turn on developer mode.
4. Choose **Load unpacked**.
5. Select this folder:

```text
extension/leetcode-exporter
```

## Use

1. Open a LeetCode problem page or accepted submission page.
2. Click the extension icon.
3. Click **Collect Current Solution**.
4. Click **Save To Repo Folder** and select the cloned `leetcode-submissions` repo root.
5. Review the generated files under `submissions/`.
6. Commit and push from the repo:

```bash
npm run sync:daily -- --push
```

If folder saving is unavailable in your browser, use **Download Files** and move the downloaded `leetcode-submissions/submissions/...` folder into the cloned repo.

## Limitations

- The extension can only see code visible in the current browser tab.
- It cannot sync source code from LeetCode's private submission history unless that code is opened/visible in the tab.
- It cannot run `git` directly. Browser extensions need a separate native helper for that, and that is a bigger trust surface.
- It may need small selector fixes if LeetCode changes its UI.

