# Angle Between Hands of a Clock

- Pattern: clock-angle math
- Original attempt: [submissions/1344-angle-between-hands-of-a-clock](../../submissions/1344-angle-between-hands-of-a-clock/)

## Model Solution

```python
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        minute_angle = 6.0 * minutes
        hour_angle = 30.0 * (hour % 12) + 0.5 * minutes
        diff = abs(hour_angle - minute_angle)
        return min(diff, 360.0 - diff)
```

## Why This Is The Model

The later accepted solution is already the clean model: compute each hand's
absolute angle from 12 o'clock, then return the smaller of the two arcs.

## Invariant

`diff` is one angle between the two hands; `360 - diff` is the complementary
angle, so the smaller value is the answer.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why does the hour hand move by `0.5 * minutes` degrees after the hour?

