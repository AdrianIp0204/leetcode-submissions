# Self Dividing Numbers

- Pattern: digit scan / divisibility check
- Original attempt: [submissions/0728-self-dividing-numbers](../../submissions/0728-self-dividing-numbers/)

## Model Solution

```python
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        answer = []

        for value in range(left, right + 1):
            original = value
            is_self_dividing = True

            while value > 0:
                digit = value % 10
                if digit == 0 or original % digit != 0:
                    is_self_dividing = False
                    break
                value //= 10

            if is_self_dividing:
                answer.append(original)

        return answer
```

## Why This Is The Model

The scan keeps the original number for divisibility checks while consuming a
working copy digit by digit. It rejects `0` digits before division, which handles
the main invalid case directly.

## Invariant

Before each digit check, every already-consumed digit of `original` is nonzero
and divides `original` evenly.

## Complexity

- Time: O((right - left + 1) * d), where `d` is the maximum digit count
- Space: O(1), excluding the output

## Review Prompt

Why should the algorithm keep `original` separate from the value being divided
down?
