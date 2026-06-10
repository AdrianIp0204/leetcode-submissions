# Find Numbers with Even Number of Digits

- Pattern: digit counting / direct filter
- Original attempt: [submissions/1295-find-numbers-with-even-number-of-digits](../../submissions/1295-find-numbers-with-even-number-of-digits/)

## Model Solution

```python
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        count = 0

        for num in nums:
            if len(str(num)) % 2 == 0:
                count += 1

        return count
```

## Why This Is The Model

The property being tested is the number of written digits, so converting to a
string expresses the condition directly. Each value is handled independently and
contributes one to the answer only when its digit count is even.

## Invariant

After processing each number, `count` equals the number of already-seen values
whose decimal representation has even length.

## Complexity

- Time: O(D), where `D` is the total number of digits across `nums`
- Space: O(d) for the current converted number

## Review Prompt

Why is this checking the parity of the digit count rather than the parity of the
number itself?
