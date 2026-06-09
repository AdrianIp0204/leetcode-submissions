# Attempt Conventions

Use this structure when a problem has more than one meaningful submission:

```text
submissions/0001-two-sum/
  README.md
  solution.py
  attempts/
    failed-001.py
    accepted-001.py
    accepted-002.ts
```

## Rules

- Keep `solution.<ext>` as the current canonical accepted solution for quick browsing.
- Put real failed attempts in `attempts/failed-NNN.<ext>` only when the source code exists.
- Put alternative accepted solutions in `attempts/accepted-NNN.<ext>` when they teach a different approach or language.
- Do not rewrite old weak code just to look smarter.
- Do not invent failed code from memory.
- Add a short note in the problem README when an attempt is important.

## Naming

- `failed-001.py` - first preserved failed attempt.
- `accepted-001.py` - first accepted alternative, if different from `solution.py`.
- `accepted-001.ts` - first TypeScript accepted variant.
- `scratch-*` should not be committed unless it teaches something durable.

The point is to show real learning: what failed, what changed, and what pattern became clear.
