# Number of Valid Clock Times

- Pattern: case counting
- Original attempt: [submissions/2437-number-of-valid-clock-times](../../submissions/2437-number-of-valid-clock-times/)

## Model Solution

```python
class Solution:
    def countTime(self, time: str) -> int:
        h1, h2, m1, m2 = 1, 1, 1, 1
        t1, t2, t3, t4 = time[0], time[1], time[3], time[4]
        if t1 == "?":
            if t2 == "?" or int(t2) < 4:
                h1 = 3
            elif int(t2) > 3:
                h1 = 2
        if t2 == "?":
            if t1 == "?":
                h2 = 8
            elif int(t1) < 2:
                h2 = 10
            elif t1 == "2":
                h2 = 4
        if t3 == "?":
            m1 = 6
        if t4 == "?":
            m2 = 10
        return h1 * h2 * m1 * m2
```

## Why This Is The Model

The accepted solution enumerates digit-choice counts without generating every possible time.

## Invariant or Proof Idea

Each multiplier equals the number of valid assignments for that unknown position under the visible neighboring digit constraints.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does a known hour ones digit greater than 3 reduce the possible hour tens choices?
