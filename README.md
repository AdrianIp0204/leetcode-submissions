# LeetCode Submissions

Private sync repo for LeetCode solutions, public profile snapshots, notes, and revision history.

The current plan is privacy-first: use only this first-party extension, avoid storing LeetCode login cookies in GitHub, and keep this private until the solutions are curated enough to become portfolio material.

## Layout

- `submissions/` - accepted solutions, usually grouped by problem id and slug.
- `notes/` - short explanations, patterns, mistakes, or follow-up ideas.
- `profile/` - public LeetCode metadata snapshots, if a username is configured.
- `scripts/` - local sync helpers.
- `extension/leetcode-exporter/` - first-party unpacked browser extension for saving visible LeetCode solutions.

## Suggested Naming

Use stable problem folders so sync tools and manual commits stay readable:

```text
submissions/0001-two-sum/solution.py
submissions/0001-two-sum/README.md
```

For multiple languages:

```text
submissions/0001-two-sum/solution.py
submissions/0001-two-sum/solution.ts
```

## Public Profile Sync

Public LeetCode data can be fetched without a browser extension or login cookie:

```bash
npm run fetch:public
```

That writes:

```text
profile/leetcode-public.json
profile/recent-accepted.md
```

This only syncs public stats and recent accepted metadata. It does not fetch source code.

## Daily Local Commit Helper

After adding solution files manually, run:

```bash
npm run sync:daily
```

To also push to GitHub:

```bash
npm run sync:daily -- --push
```

The tracked public config uses LeetCode username `AdrianIp`. For private local overrides, copy `config/leetcode-sync.example.json` to `.leetcode-sync.json`. The copied file is ignored by git.

See `docs/sync-strategy.md` for the privacy tradeoffs and public-portfolio rules.

## First-Party Browser Extension

For the computer where you solve LeetCode, load the local extension from:

```text
extension/leetcode-exporter
```

It runs only on LeetCode, does not use a GitHub token, auto-captures accepted visible solutions, and can backfill past accepted submissions from your logged-in LeetCode browser session. See `extension/leetcode-exporter/README.md`.

## Automatic Local Sync

The extension downloads exports under:

```text
Downloads/leetcode-submissions/
```

On Windows, install the local watcher once from a cloned repo:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\install-windows-auto-sync.ps1
```

It creates a Scheduled Task that copies downloaded exports into the repo, commits changes, and pushes. This keeps GitHub credentials out of the extension.
