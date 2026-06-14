# Count Common Words With One Occurrence

- Pattern: Counter frequency filtering
- Original attempt: [submissions/2085-count-common-words-with-one-occurrence](../../submissions/2085-count-common-words-with-one-occurrence/)

## Model Solution

```python
class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        cw1, cw2 = Counter(words1), Counter(words2)
        res = 0
        for k, v in cw1.items():
            if v == 1 and cw2[k] == 1:
                res += 1
        return res
```

## Why This Is The Model

The accepted solution uses two Counters and checks the exact-one condition directly.

## Invariant or Proof Idea

For every processed word from the first Counter, `res` includes it iff both lists contain exactly one copy.

## Complexity

- Time: O(n + m)
- Space: O(u + v)

## Review Prompt

Why does `cw2[k]` safely return zero for missing words?
