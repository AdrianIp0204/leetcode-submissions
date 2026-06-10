# Fizz Buzz

- Pattern: ordered simulation / divisibility cases
- Original attempt: [submissions/0412-fizz-buzz](../../submissions/0412-fizz-buzz/)

## Model Solution

```python
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        answer = []

        for value in range(1, n + 1):
            if value % 15 == 0:
                answer.append("FizzBuzz")
            elif value % 3 == 0:
                answer.append("Fizz")
            elif value % 5 == 0:
                answer.append("Buzz")
            else:
                answer.append(str(value))

        return answer
```

## Why This Is The Model

The combined divisibility case is checked first, so multiples of both `3` and
`5` cannot be captured by a less specific branch. The loop then maps each number
directly to exactly one output string.

## Invariant

After processing `value`, `answer` contains the correct Fizz Buzz string for
every integer from `1` through `value`.

## Complexity

- Time: O(n)
- Space: O(n) for the output

## Review Prompt

Why does checking divisibility by `3` before the combined case make `15`
incorrect?
