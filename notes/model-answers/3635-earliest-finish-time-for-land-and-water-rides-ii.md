# Earliest Finish Time for Land and Water Rides II

- Pattern: two-order scheduling minimum
- Original attempt: [submissions/3635-earliest-finish-time-for-land-and-water-rides-ii](../../submissions/3635-earliest-finish-time-for-land-and-water-rides-ii/)

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

The two possible orders are independent cases: land then water, or water then
land. Within either case, choosing the earliest-finishing first ride is always at
least as good as choosing a later-finishing first ride because the second ride's
start is governed by `max(first_finish, second_start)`.

## Invariant

Every candidate finish time considered by the loops is the best finish time for
one concrete second ride under one of the two valid ride orders.

## Complexity

- Time: O(n + m)
- Space: O(1)

## Review Prompt

For a fixed water ride taken second, why can no land ride beat the
earliest-finishing land ride?
