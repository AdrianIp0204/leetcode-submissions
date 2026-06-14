# Sum Multiples

- LeetCode: https://leetcode.com/problems/sum-multiples/
- Language: cpp
- Exported at: 2026-06-05T14:10:01.861Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 8556000
- Submitted at: 2026-06-03T11:10:55.000Z
- Submission ID: 2021171015

## Pattern

Divisibility scan.

## Key Idea

Scan every number from 1 through `n` and add it if it is divisible by 3, 5, or 7. The Python and C++ versions use the same inclusion check. This direct scan is clear for the small constraints.

## Mistake / Edge Case

Use OR between divisibility checks so numbers divisible by multiple bases are still added only once.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When scanning candidate numbers, the condition should describe membership exactly once.
