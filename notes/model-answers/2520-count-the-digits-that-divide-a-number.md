# Count the Digits That Divide a Number

- Pattern: digit iteration
- Original attempt: [submissions/2520-count-the-digits-that-divide-a-number](../../submissions/2520-count-the-digits-that-divide-a-number/)

## Model Solution

```python
class Solution:
    def countDigits(self, num: int) -> int:
        count = 0

        for digit in str(num):
            if num % int(digit) == 0:
                count += 1

        return count
```

## Why This Is The Model

The answer counts digit occurrences, not distinct digit values. Iterating over
the string form of `num` checks each occurrence exactly once and increments the
answer when that digit divides the original number.

## Invariant

After processing any prefix of the digit string, `count` equals the number of
processed digit occurrences that divide the original `num`.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(d) for the string representation

## Review Prompt

Why should repeated digits be checked as repeated occurrences instead of being
collapsed into a set?
