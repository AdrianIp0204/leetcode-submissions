# Total Waviness of Numbers in Range II

- Pattern: digit DP / accumulated score
- Original attempt: [submissions/3753-total-waviness-of-numbers-in-range-ii](../../submissions/3753-total-waviness-of-numbers-in-range-ii/)

## Model Solution

```python
from collections import defaultdict


class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        def is_wave(left: int, middle: int, right: int) -> bool:
            return left < middle > right or left > middle < right

        def count_up_to(limit: int) -> int:
            if limit <= 0:
                return 0

            digits = [int(ch) for ch in str(limit)]
            dp = {(-1, -1, False, True): (1, 0)}

            for pos, upper_digit in enumerate(digits):
                next_dp = defaultdict(lambda: [0, 0])

                for (prev2, prev1, started, tight), (count, waves) in dp.items():
                    upper = upper_digit if tight else 9

                    for digit in range(upper + 1):
                        next_tight = tight and digit == upper_digit

                        if not started and digit == 0:
                            key = (-1, -1, False, next_tight)
                            next_dp[key][0] += count
                            next_dp[key][1] += waves
                            continue

                        if not started:
                            key = (-1, digit, True, next_tight)
                            next_dp[key][0] += count
                            next_dp[key][1] += waves
                            continue

                        add = 1 if prev2 != -1 and is_wave(prev2, prev1, digit) else 0
                        key = (prev1, digit, True, next_tight)
                        next_dp[key][0] += count
                        next_dp[key][1] += waves + add * count

                dp = {key: tuple(value) for key, value in next_dp.items()}

            return sum(waves for count, waves in dp.values())

        return count_up_to(num2) - count_up_to(num1 - 1)
```

## Why This Is The Model

Digit DP avoids enumerating every number in a large range. Each state stores both
how many prefixes it represents and the total waviness already accumulated by
those prefixes; when a new digit arrives, it can decide whether the previous
digit became a peak or valley.

## Invariant

For every DP state, `count` is the number of prefixes with the tracked previous
digits and tightness, and `waves` is the total waviness already determined for
all those prefixes.

## Complexity

- Time: O(d * 10 * states), where d is the digit length
- Space: O(states)

## Review Prompt

Why is a wave counted when adding the right neighbor digit, not when first seeing
the middle digit?
