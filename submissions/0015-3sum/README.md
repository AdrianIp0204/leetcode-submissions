# 3Sum

- LeetCode: https://leetcode.com/problems/3sum/
- Language: python3
- Exported at: 2026-06-11T05:51:09.944Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Two Pointers, Sorting
- Runtime: 642
- Memory: 22280000
- Submitted at: 2026-06-11T05:51:03.000Z
- Submission ID: 2029339683

## Pattern

sorting + fixed index + two pointers.

## Key Idea

Sort the array, fix one value, then move the left and right pointers toward each other to find pairs that complete zero. Skipping repeated fixed values and repeated pointer values keeps each triplet unique.

## Mistake / Edge Case

Duplicate control is the whole problem: skip a repeated `i`, and after recording a triplet move past repeated `left` and `right` values before continuing.

## Complexity

- Time: O(n^2)
- Space: O(1) extra, ignoring the output list and the sort's implementation details

## What Adrian Should Remember

For sorted k-sum problems, fix one dimension and let two pointers do the remaining search while duplicates are handled at the moment they can be created.
