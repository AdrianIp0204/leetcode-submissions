# Number of ZigZag Arrays I

- LeetCode: https://leetcode.com/problems/number-of-zigzag-arrays-i/
- Language: python3
- Exported at: 2026-06-23T05:49:42.788Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Dynamic Programming, Prefix Sum
- Runtime: 3773
- Memory: 19424000
- Submitted at: 2026-06-23T05:49:12.000Z
- Submission ID: 2042942741

## Pattern

Dynamic programming with prefix sums

## Key Idea

Track counts by ending value for one comparison direction, reverse to switch direction, and use prefix sums to aggregate all smaller valid previous values in O(m) per length.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: counts are kept modulo 1,000,000,007.

## Complexity

- Time: O(n * m), where `m = r - l + 1`
- Space: O(m)
