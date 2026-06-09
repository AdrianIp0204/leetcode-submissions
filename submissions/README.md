# Submissions

This folder is the raw learning archive. Keep it honest: accepted solutions,
failed attempts, and later rewrites should all be allowed here when they teach
something.

Recommended problem folder pattern:

```text
0001-two-sum/
0015-3sum/
0206-reverse-linked-list/
```

Canonical accepted submissions use the problem folder's `solution.*` file:

```text
0001-two-sum/
  README.md
  solution.py
  solution.ts
```

When there are multiple accepted approaches in the same language, keep the
clearest one as `solution.*` and preserve variants explicitly:

```text
0001-two-sum/
  solution.py
  accepted-2-hash-map.py
```

Non-accepted attempts live under that problem folder's `attempts/` directory:

```text
0001-two-sum/
  attempts/
    failed-1-bruteforce-timeout.py
    failed-2-index-bug.py
```

Do not invent failed attempts after the fact. Backfill them only from real saved
code, browser history, or screenshots. New failed attempts should be saved
because they are part of the learning trace.
