# Maximum Number of Balloons

- Pattern: frequency counting
- Original attempt: [submissions/1189-maximum-number-of-balloons](../../submissions/1189-maximum-number-of-balloons/)

## Model Solution

```python
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        counts = Counter(text)
        return min(
            counts["b"],
            counts["a"],
            counts["l"] // 2,
            counts["o"] // 2,
            counts["n"],
        )
```

## Why This Is The Model

Each copy of `balloon` consumes one `b`, one `a`, one `n`, and two each of
`l` and `o`. The limiting normalized character count is therefore the maximum
number of complete words that can be formed.

## Invariant

For each required character, the normalized count records how many full
`balloon` words that character could support on its own; the answer is the
minimum of those limits.

## Complexity

- Time: O(n)
- Space: O(k)

## Review Prompt

Why do `l` and `o` need to be divided before taking the minimum?
