# Letter Combinations of a Phone Number

- Pattern: backtracking / cartesian product
- Original attempt: [submissions/0017-letter-combinations-of-a-phone-number](../../submissions/0017-letter-combinations-of-a-phone-number/)

## Model Solution

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        letters = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        res = []
        path = []

        def backtrack(i: int) -> None:
            if i == len(digits):
                res.append("".join(path))
                return

            for ch in letters[digits[i]]:
                path.append(ch)
                backtrack(i + 1)
                path.pop()

        backtrack(0)
        return res
```

## Why This Is The Model

The accepted attempt enumerates combinations with separate nested loops for each
input length. The model answer expresses the same product recursively, so adding
another digit does not require adding another hand-written loop.

## Invariant

At recursion depth `i`, `path` contains one chosen letter for each of the first
`i` digits. When `i == len(digits)`, that path is one complete combination.

## Complexity

- Time: O(4^n * n)
- Space: O(4^n * n) for the returned strings, plus O(n) recursion depth

## Review Prompt

Why is an empty `digits` input returned as an empty list instead of `[""]`?
