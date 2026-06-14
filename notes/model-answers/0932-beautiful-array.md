# Beautiful Array

- Pattern: divide and conquer parity construction
- Original attempt: [submissions/0932-beautiful-array](../../submissions/0932-beautiful-array/)

## Model Solution

```python
class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        res = [1]
        while len(res) < n:
            res = [i * 2 - 1 for i in res] + [i * 2 for i in res]
        return [i for i in res if i <= n]
```

## Why This Is The Model

The accepted solution uses the classic beautiful-array closure rules: odd and even transforms preserve internal beauty and parity separation prevents cross-half violations.

## Invariant or Proof Idea

Before trimming, `res` is beautiful; applying odd and even affine transforms preserves beauty within halves and prevents a middle element between halves.

## Complexity

- Time: O(n log n) for repeated expansions and filtering
- Space: O(n)

## Review Prompt

Why does placing all odd-transformed values before even-transformed values help avoid forbidden averages?
