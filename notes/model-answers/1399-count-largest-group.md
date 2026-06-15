# Count Largest Group

- Pattern: digit-sum counting
- Original attempt: [submissions/1399-count-largest-group](../../submissions/1399-count-largest-group/)

## Model Solution

```python
class Solution:
    def countLargestGroup(self, n: int) -> int:
        groups = defaultdict(int)

        for value in range(1, n + 1):
            digit_sum = 0
            x = value
            while x:
                digit_sum += x % 10
                x //= 10
            groups[digit_sum] += 1

        largest = max(groups.values())
        return sum(size == largest for size in groups.values())
```

## Why This Is The Model

The only state needed for each number is its digit sum. Counting group sizes and
then counting the maximum-sized groups keeps the logic separate and easy to
check.

## Invariant

After processing `value`, `groups[s]` is the number of scanned integers with
digit sum `s`.

## Complexity

- Time: O(n log n)
- Space: O(log n)

## Review Prompt

Why is it useful to copy `value` into `x` before stripping digits?
