# Squares of a Sorted Array

- LeetCode: https://leetcode.com/problems/squares-of-a-sorted-array/
- Language: python3
- Exported at: 2026-06-08T06:13:43.568Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers, Sorting
- Runtime: 15
- Memory: 20976000
- Submitted at: 2026-06-04T04:14:15.000Z
- Submission ID: 2021831309

## Pattern

Two pointers from both ends.

## Key Idea

Because the input is sorted, the largest square must come from either the leftmost negative number or the rightmost positive number. The solution compares absolute values at both ends, writes the larger square into the result from right to left, and moves that pointer inward. This avoids sorting the squared values afterward.

## Mistake / Edge Case

Negative numbers can produce the largest squares, so scanning only from the positive end is wrong. Filling the result from the back keeps the output sorted.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For sorted arrays with negative values, compare both ends when magnitude matters.
