# Total Waviness of Numbers in Range II

- LeetCode: https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii/
- Language: python3
- Exported at: 2026-06-05T04:01:53.975Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-05T04:01:52.000Z
- Submission ID: 2022838921

## Pattern

Digit DP with accumulated score.

## Key Idea

Pad the lower bound, then process digits with DP states tracking the previous two digits, whether a real number has started, and tightness against both bounds. Each transition carries both the count of numbers represented and the total waves accumulated so far. When a new digit makes the previous digit a peak or valley, add that contribution for every number in the state.

## Mistake / Edge Case

Leading zeros should not create waves, so the `started` flag and sentinel previous digits are necessary.

## Complexity

- Time: O(d * 10 * states), bounded by digit length and DP state count
- Space: O(states)

## What Adrian Should Remember

For digit DP with scoring, store both how many prefixes exist and the accumulated score over those prefixes.
