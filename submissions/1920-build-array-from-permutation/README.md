# Build Array from Permutation

- LeetCode: https://leetcode.com/problems/build-array-from-permutation/
- Language: python3
- Exported at: 2026-06-13T10:20:30.054Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Simulation
- Memory: 19412000
- Submitted at: 2026-06-13T10:20:26.000Z
- Submission ID: 2031658462

## Pattern

array mapping.

## Key Idea

Construct a new array where each position `i` reads from `nums[nums[i]]`.

## Mistake / Edge Case

The input is a permutation, so every lookup index is valid.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

If mutation is not required, build the mapped array directly and keep indexing readable.
