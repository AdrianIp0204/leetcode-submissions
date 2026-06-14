# Intersection of Multiple Arrays

- LeetCode: https://leetcode.com/problems/intersection-of-multiple-arrays/
- Language: python3
- Exported at: 2026-06-13T04:47:20.462Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sorting, Counting
- Runtime: 2
- Memory: 19520000
- Submitted at: 2026-06-13T04:47:17.000Z
- Submission ID: 2031359682

## Pattern

iterative set intersection.

## Key Idea

Start from the first array's set and intersect it with every other array's set. Sort the final common values.

## Mistake / Edge Case

Sorting is required for stable increasing output, even though set intersection itself is unordered.

## Complexity

- Time: O(total elements + u log u)
- Space: O(u)

## What Adrian Should Remember

For common-to-all problems, keep shrinking one candidate set.
