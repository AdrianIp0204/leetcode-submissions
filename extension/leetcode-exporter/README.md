# LeetCode Repo Exporter

First-party browser extension for saving accepted LeetCode solutions into this repo.

It is intentionally boring:

- Runs only on `leetcode.com`.
- Does not store or read LeetCode cookies.
- Does not use a GitHub token.
- Does not make network requests except to LeetCode from your active logged-in LeetCode page.
- Can auto-download collected files under `Downloads/leetcode-submissions/`.

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
2. Keep **Auto collect accepted pages** and **Auto download collected files** enabled.
3. When an accepted solution is visible, the extension queues and downloads it automatically.
4. To backfill older solutions, open any LeetCode page while logged in and click **Collect Past Accepted**.

Automatic downloads land here:

```text
Downloads/leetcode-submissions/submissions/...
```

If you prefer direct folder saving, use **Save Queue To Repo** and select the cloned `leetcode-submissions` repo root.

## No-Repeated-Command Sync

Browser extensions cannot safely run `git` by themselves. Use the local watcher once on the computer where you solve LeetCode:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\install-windows-auto-sync.ps1
```

That installs a local watcher named `LeetCodeSubmissionsAutoSync`. It watches `Downloads\leetcode-submissions`, copies exports into the repo, commits changes, and pushes. It prefers a current-user Scheduled Task, but falls back to a per-user Startup launcher when Task Scheduler is blocked.

For a one-off foreground run:

```bash
npm run sync:auto -- --push
```

If folder saving is unavailable in your browser, use **Download Files** and move the downloaded `leetcode-submissions/submissions/...` folder into the cloned repo.

## Limitations

- The extension can only see code visible in the current browser tab.
- Past accepted collection needs your logged-in LeetCode browser session. It uses the session implicitly for LeetCode requests but does not read or store cookies.
- It cannot run `git` directly. The local watcher handles commits/pushes.
- It may need small selector fixes if LeetCode changes its UI.
