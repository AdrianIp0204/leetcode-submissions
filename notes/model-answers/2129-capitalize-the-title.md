# Capitalize the Title

- Pattern: word transformation
- Original attempt: [submissions/2129-capitalize-the-title](../../submissions/2129-capitalize-the-title/)

## Model Solution

```python
class Solution:
    def capitalizeTitle(self, title: str) -> str:
        TITLE = title.title().split()
        res = []
        for w in TITLE:
            if len(w) < 3:
                res.append(w.lower())
            else:
                res.append(w)
        return " ".join(res)
```

## Why This Is The Model

The accepted solution cleanly separates word splitting, case normalization, and the length exception.

## Invariant or Proof Idea

Each output word is independently transformed according to its length and then returned in original word order.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why do short words need a second lowercase pass after `title()`?
