# Find Closest Person

- LeetCode: https://leetcode.com/problems/find-closest-person/
- Language: python3
- Exported at: 2026-06-13T11:09:32.876Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 19300000
- Submitted at: 2026-06-13T11:09:30.000Z
- Submission ID: 2031700488

## Pattern

distance comparison.

## Key Idea

Compare `abs(z - x)` and `abs(z - y)`. Return the closer person, or zero if tied.

## Mistake / Edge Case

Equal distances must return `0`, not either person.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Closest-on-a-line questions reduce to absolute distance comparisons.
