# Concatenate Array With Reverse

- LeetCode: https://leetcode.com/problems/concatenate-array-with-reverse/
- Language: python3
- Exported at: 2026-06-07T07:56:31.545Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Simulation
- Memory: 19124000
- Submitted at: 2026-06-06T06:25:55.000Z
- Submission ID: 2023917729

## Pattern

Array plus reversed copy.

## Key Idea

The output is the original array followed by its reverse. Python slicing with `[::-1]` creates the reversed copy, and list concatenation builds the final result. The input list itself is not mutated.

## Mistake / Edge Case

The second half should be a reversed copy, not an in-place reversal that loses the original order.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Slicing is a concise way to express reversed-copy construction in Python.
