# LeetCode Submissions

Private sync repo for LeetCode solutions, public profile snapshots, notes, and revision history.

The current plan is privacy-first: avoid browser extensions, avoid storing LeetCode login cookies in GitHub, and keep this private until the solutions are curated enough to become portfolio material.

## Layout

- `submissions/` - accepted solutions, usually grouped by problem id and slug.
- `notes/` - short explanations, patterns, mistakes, or follow-up ideas.
- `profile/` - public LeetCode metadata snapshots, if a username is configured.
- `scripts/` - local sync helpers.

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
npm run fetch:public -- --username your-leetcode-username
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

For a local config, copy `config/leetcode-sync.example.json` to `.leetcode-sync.json`. The copied file is ignored by git.

See `docs/sync-strategy.md` for the privacy tradeoffs and public-portfolio rules.
