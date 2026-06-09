# Type of Triangle

- LeetCode: https://leetcode.com/problems/type-of-triangle/
- Language: python3
- Exported at: 2026-06-05T05:06:30.750Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-05T05:06:26.000Z
- Submission ID: 2022893284

## Pattern

Triangle inequality and equality classification.

## Key Idea

First check the side-equality cases and triangle inequalities. If all sides are equal, return equilateral. Otherwise, a valid triangle with exactly two equal sides is isosceles, and a valid triangle with all sides different is scalene.

## Mistake / Edge Case

A shape with side lengths that violate the triangle inequality must return `none` even if two sides are equal.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For geometry classification, validate existence before trusting category labels.
