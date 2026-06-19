# Find Minimum Operations to Make All Elements Divisible by Three

- LeetCode: https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/
- Language: python3
- Exported at: 2026-06-17T15:05:49.808Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19188000
- Submitted at: 2026-06-17T15:05:49.000Z
- Submission ID: 2036512717

## Pattern

Count independent fixes

## Key Idea

Each element can be handled independently: numbers divisible by three need no
operation, and every other remainder contributes one operation.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: count by remainder, not by the
numeric size of the element.

## Complexity

- Time: O(n)
- Space: O(1)
