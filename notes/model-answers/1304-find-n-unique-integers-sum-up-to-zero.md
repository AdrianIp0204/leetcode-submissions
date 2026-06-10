# Find N Unique Integers Sum up to Zero

- Pattern: constructive math / canceling pairs
- Original attempt: [submissions/1304-find-n-unique-integers-sum-up-to-zero](../../submissions/1304-find-n-unique-integers-sum-up-to-zero/)

## Model Solution

```python
class Solution:
    def sumZero(self, n: int) -> List[int]:
        answer = []

        for value in range(1, n // 2 + 1):
            answer.append(value)
            answer.append(-value)

        if n % 2 == 1:
            answer.append(0)

        return answer
```

## Why This Is The Model

Every positive-negative pair contributes zero to the total, so the sum is correct
by construction. Adding `0` for odd `n` preserves both uniqueness and the zero
sum while reaching the requested length.

## Invariant

After each pair is appended, all values in `answer` are unique and their sum is
still zero.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why is `0` only needed when `n` is odd?
