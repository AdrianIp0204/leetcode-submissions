# Neither Minimum nor Maximum

- LeetCode: https://leetcode.com/problems/neither-minimum-nor-maximum/
- Language: python3
- Exported at: 2026-06-05T14:09:38.817Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Sorting
- Runtime: 11
- Memory: 19420000
- Submitted at: 2026-06-05T12:59:15.000Z
- Submission ID: 2023288968

## Pattern

Sort and choose middle.

## Key Idea

If fewer than three numbers exist, there is no value that is neither minimum nor maximum. Otherwise, sorting places a valid middle value at index one. Any middle value is acceptable.

## Mistake / Edge Case

Length two cannot work because both values are extremes.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## What Adrian Should Remember

When any non-extreme value is accepted, sorting gives a simple valid witness.
