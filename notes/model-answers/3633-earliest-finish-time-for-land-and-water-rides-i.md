# Earliest Finish Time for Land and Water Rides I

- Pattern: two-order scheduling minimum
- Original attempt: [submissions/3633-earliest-finish-time-for-land-and-water-rides-i](../../submissions/3633-earliest-finish-time-for-land-and-water-rides-i/)

## Model Solution

```python
class Solution:
    def earliestFinishTime(
        self,
        landStartTime: List[int],
        landDuration: List[int],
        waterStartTime: List[int],
        waterDuration: List[int],
    ) -> int:
        earliest_land_finish = min(
            start + duration
            for start, duration in zip(landStartTime, landDuration)
        )
        earliest_water_finish = min(
            start + duration
            for start, duration in zip(waterStartTime, waterDuration)
        )

        answer = float("inf")

        for start, duration in zip(waterStartTime, waterDuration):
            answer = min(answer, max(earliest_land_finish, start) + duration)

        for start, duration in zip(landStartTime, landDuration):
            answer = min(answer, max(earliest_water_finish, start) + duration)

        return answer
```

## Why This Is The Model

For a fixed second ride, the finish time only improves when the first ride
finishes earlier. That means each order needs only the earliest possible finish
from the first ride type, then every ride of the second type can be tested once.

## Invariant

Before evaluating a second-stage ride, `earliest_land_finish` and
`earliest_water_finish` are the best possible finish times for completing one
ride from each type first.

## Complexity

- Time: O(n + m)
- Space: O(1)

## Review Prompt

Why is `max(first_finish, second_start) + second_duration` the right expression
for the second ride?
