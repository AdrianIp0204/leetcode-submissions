# Concatenation of Array

- LeetCode: https://leetcode.com/problems/concatenation-of-array/
- Language: python3
- Exported at: 2026-06-08T06:13:59.851Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Simulation
- Runtime: 4
- Memory: 19300000
- Submitted at: 2026-06-03T06:34:30.000Z
- Submission ID: 2020924148

## Pattern

Array duplication.

## Key Idea

The target output is the original array followed by itself. Extending the list with itself mutates and doubles it, then returns the result. This is concise, though `nums + nums` would avoid mutating the input name.

## Mistake / Edge Case

Make sure the second half is the original sequence, not a progressively extended copy beyond one duplication.

## Complexity

- Time: O(n)
- Space: O(n), for the doubled list contents

## What Adrian Should Remember

Mutation is fine when the platform ignores input after return, but note it when reading code later.
