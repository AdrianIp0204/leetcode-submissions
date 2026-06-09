# Build an Array With Stack Operations

- LeetCode: https://leetcode.com/problems/build-an-array-with-stack-operations/
- Language: python3
- Exported at: 2026-06-07T07:56:18.198Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Stack, Simulation
- Memory: 19020000
- Submitted at: 2026-06-07T07:36:06.000Z
- Submission ID: 2025125497

## Pattern

Simulation with skipped values.

## Key Idea

The stream starts at 1 and advances until each target value is reached. Values below the next target are simulated with Push then Pop, while target values are kept with Push. Because target is increasing, one pointer over the stream is enough.

## Mistake / Edge Case

After pushing a target value, advance the stream counter too; otherwise the next target is compared against the same number again.

## Complexity

- Time: O(n + m), where m is the largest consumed stream value
- Space: O(m), for the operation list

## What Adrian Should Remember

For simulation problems, track the real state being consumed instead of trying to infer operations backward.
