# Sync Strategy

Privacy-first recommendation:

1. Keep this repository private while the solutions are still rough.
2. Commit accepted solution files locally under `submissions/`.
3. Use the public LeetCode GraphQL endpoint only for profile stats and recent accepted metadata.
4. Use a local daily sync job only after the local workflow feels right.
5. Make the repository public later only after a curation pass.

## Why This Extension Is Narrow

Most LeetCode sync extensions need access to the logged-in LeetCode page and GitHub. Even when open source, that creates a wide trust surface: browser cookies, page contents, GitHub tokens, and all future extension updates.

This repo uses a first-party extension with a narrower boundary:

- It runs only on LeetCode.
- It does not read or store cookies.
- It does not hold a GitHub token.
- It can fetch past accepted submissions only through the current logged-in LeetCode browser session.
- It downloads a local handoff bundle; a separate local watcher handles git.

## What Public Sync Can And Cannot Do

Public LeetCode data can provide:

- Solved counts by difficulty.
- Ranking and contest ranking.
- Recent accepted submission titles, slugs, timestamps, and language.
- Profile metadata for the configured public username, currently `AdrianIp`.

Public LeetCode data cannot provide:

- Your submitted source code.
- Full private submission history.
- Editorial/private problem content.

## Actual Solution Code Options

Best default: after solving, save or paste the accepted solution into this repo and let a local helper commit it.

Current first-party extension option: use `extension/leetcode-exporter` on the computer where you solve LeetCode. It can auto-capture visible submissions, backfill accepted submissions plus recent failed attempts, and create one local handoff bundle for the watcher. It does not hold a GitHub token or run `git`.

Current local watcher option: use `scripts/auto-sync.mjs` or the OS installer to expand extension handoff bundles into the repo and commit locally. Push only by passing `--push` once the public-readiness gate is deliberately cleared.

Current planning option: run `npm run fetch:public`, `npm run sync:health`, and
`npm run recommend:next` to compare public solved counts against local problem
folders and generate a pattern-focused next-problem queue. This is a guidance
tool, not a full source-code sync; the extension backfill is still needed when
the repo falls behind the public profile.

Possible later option: authenticated local scraper using a LeetCode session cookie stored only on the Mac. This can be convenient, but it is still a credential-bearing workflow and should be treated carefully.

Bad default: GitHub Actions with a LeetCode session cookie stored in GitHub Secrets. That moves the sensitive credential off the Mac and gives little privacy upside.

## Trace A Missing Accepted Solution

Run this on the computer where the extension and watcher run, from the cloned
repo root:

```bash
npm run sync:diagnose
# If the browser uses another download directory:
npm run sync:diagnose -- --inbox /path/to/Downloads/leetcode-submissions
```

This read-only check names recent public acceptances without nonempty canonical
or archived accepted source, and checks the watcher's `queue`, `_queue`, `.queue`,
and their `processed` directories. It retains the estimated archive-gap warning;
the recent public list is incomplete, and a folder or failed attempt alone does
not prove accepted code is archived. It never prints submitted code or imports,
archives, commits, or pushes anything.

Trace the boundaries in order:

1. **Capture:** `content.js` fetches submission details through the logged-in
   LeetCode tab. If code is absent from both repo and handoff, reload the unpacked
   extension and the LeetCode tab, then use **Collect Submission History**.
2. **Handoff:** `background.js` queues exports in extension storage, downloads a
   `leetcode-submissions.export-bundle.v1` bundle, and marks it handed off only
   after Chrome reports download completion. **Hand Off Queue To Sync** re-exports
   the queue, including previously handed-off entries. Compare the actual completed
   filename shown in the popup with the diagnostic's inbox; the browser can use a
   custom download location. A completed download is not proof of watcher import.
3. **Import:** `auto-sync.mjs` reads completed bundles in the three queue directories,
   writes source, and moves bundles to `processed`. If source is queued, run
   `npm run sync:auto -- --once` with the same `--inbox` and inspect its output.
   If only a processed bundle has source, check the watcher repo path and logs
   before re-handing off the extension queue. Malformed bundles and incomplete
   downloads are reported by the diagnostic, not changed.
4. **Publish:** the watcher commits locally by default. Check its commit output
   and local git history; publication needs `git push` or an explicitly enabled
   `--push` watcher. Check git-busy and unrelated-staged-change messages if imports
   remain uncommitted.

The command cannot inspect another computer's extension storage, downloads,
watcher process, or logs. If those are unavailable and no handoff contains the
source, the failing boundary remains unverified; public metadata cannot recover
the accepted solution. Keep the archive-gap warning and backfill via the extension.

## Portfolio Rules

Before making this public:

- Remove throwaway drafts and embarrassing scratch files.
- Keep solution explanations concise and honest.
- Link to LeetCode problems instead of copying full problem statements.
- Add complexity notes and the key idea for stronger problems.
- Prefer a smaller set of clean, representative solutions over a raw mirror.
