# Earliest Finish Time for Land and Water Rides II

- LeetCode: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/
- Language: python3
- Exported at: 2026-06-03T06:28:39.859Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Two-order scheduling minimum.

## Key Idea

Find the earliest finish among land rides and among water rides. Then evaluate finishing with a water ride after the best land ride, and finishing with a land ride after the best water ride. This avoids testing every pair while still covering both ride orders.

## Mistake / Edge Case

For the second ride, finish time is `max(firstFinish, secondStart) + secondDuration`.

## Complexity

- Time: O(n + m)
- Space: O(1)

## What Adrian Should Remember

When exactly one item from each group is needed, ask whether each order only needs the best possible first finish.
