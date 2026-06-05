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

Current first-party extension option: use `extension/leetcode-exporter` on the computer where you solve LeetCode. It can auto-capture accepted visible solutions, backfill past accepted submissions, and create one local handoff bundle for the watcher. It does not hold a GitHub token or run `git`.

Current local watcher option: use `scripts/auto-sync.mjs` or `scripts/install-windows-auto-sync.ps1` to expand extension handoff bundles into the repo, commit, and push.

Current planning option: run `npm run fetch:public`, `npm run sync:health`, and
`npm run recommend:next` to compare public solved counts against local problem
folders and generate a pattern-focused next-problem queue. This is a guidance
tool, not a full source-code sync; the extension backfill is still needed when
the repo falls behind the public profile.

Possible later option: authenticated local scraper using a LeetCode session cookie stored only on the Mac. This can be convenient, but it is still a credential-bearing workflow and should be treated carefully.

Bad default: GitHub Actions with a LeetCode session cookie stored in GitHub Secrets. That moves the sensitive credential off the Mac and gives little privacy upside.

## Portfolio Rules

Before making this public:

- Remove throwaway drafts and embarrassing scratch files.
- Keep solution explanations concise and honest.
- Link to LeetCode problems instead of copying full problem statements.
- Add complexity notes and the key idea for stronger problems.
- Prefer a smaller set of clean, representative solutions over a raw mirror.
