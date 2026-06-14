# Add to Array-Form of Integer

- Pattern: grade-school addition from right to left
- Original attempt: [submissions/0989-add-to-array-form-of-integer](../../submissions/0989-add-to-array-form-of-integer/)

## Model Solution

```python
class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        i = len(num) - 1
        res = []

        while i >= 0 or k > 0:
            if i >= 0:
                k += num[i]
                i -= 1
            res.append(k % 10)
            k //= 10

        return res[::-1]
```

## Why This Is The Model

The accepted solution avoids converting the whole array to an integer and uses normal digit arithmetic.

## Invariant or Proof Idea

After each loop, `res` holds the completed low-order digits in reverse order, and `k` holds the remaining carry/addend to propagate left.

## Complexity

- Time: O(max(n, log k))
- Space: O(max(n, log k)) for the result

## Review Prompt

Why does the loop condition include `k > 0`?
