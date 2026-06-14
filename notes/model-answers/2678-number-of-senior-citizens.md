# Number of Senior Citizens

- Pattern: fixed-width string parsing
- Original attempt: [submissions/2678-number-of-senior-citizens](../../submissions/2678-number-of-senior-citizens/)

## Model Solution

```python
class Solution:
    def countSeniors(self, details: List[str]) -> int:
        res = 0
        for d in details:
            if int(d[11]) * 10 + int(d[12]) > 60:
                res += 1
        return res
```

## Why This Is The Model

The accepted solution reads exactly the two age digits and applies the strict senior threshold.

## Invariant or Proof Idea

After each detail string, `res` is the count of processed passengers whose parsed age is greater than 60.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should age 60 not increment the count?
