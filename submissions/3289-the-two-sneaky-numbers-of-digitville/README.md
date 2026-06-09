# The Two Sneaky Numbers of Digitville

- LeetCode: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
- Language: python3
- Exported at: 2026-06-07T07:56:25.161Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Math
- Runtime: 3
- Memory: 19476000
- Submitted at: 2026-06-07T03:03:44.000Z
- Submission ID: 2024896335

## Pattern

Frequency counting.

## Key Idea

Track how many times each number has appeared. When a count becomes greater than one, append that number to the result. The problem guarantees two repeated values, so this direct frequency map is enough.

## Mistake / Edge Case

Append only when the count crosses above one, not on the first occurrence.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For duplicate detection, count as you scan and react when a value repeats.
