# Monotonic Array

- LeetCode: https://leetcode.com/problems/monotonic-array/
- Language: python3
- Exported at: 2026-06-12T05:46:20.898Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Runtime: 23
- Memory: 31644000
- Submitted at: 2026-06-12T05:46:15.000Z
- Submission ID: 2030422520

## Pattern

single-pass direction tracking.

## Key Idea

Ignore equal adjacent values until a direction appears. Once the direction is known, any opposite comparison means the array is not monotonic.

## Mistake / Edge Case

Equal runs and arrays shorter than three are automatically monotonic.

## Complexity

- Time: O(n)
- Space: O(1), though the accepted code mutates the input with `pop()`

## What Adrian Should Remember

For monotonic checks, track direction as unknown/increasing/decreasing and let equal values pass.
