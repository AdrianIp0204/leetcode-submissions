# Valid Boomerang

- LeetCode: https://leetcode.com/problems/valid-boomerang/
- Language: python3
- Exported at: 2026-06-13T03:11:41.590Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math, Geometry
- Memory: 19164000
- Submitted at: 2026-06-13T03:11:37.000Z
- Submission ID: 2031302378

## Pattern

geometry / cross product.

## Key Idea

Three points form a boomerang exactly when they are not collinear. Compare slopes by cross multiplication to avoid division.

## Mistake / Edge Case

Duplicate points make the cross product zero too, so they are correctly rejected as not a boomerang.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Use cross product for collinearity; avoid floating-point slopes.
