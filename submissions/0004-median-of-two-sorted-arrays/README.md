# Median of Two Sorted Arrays

- LeetCode: https://leetcode.com/problems/median-of-two-sorted-arrays/
- Language: python3
- Exported at: 2026-06-03T07:09:06.366Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Array, Binary Search, Divide and Conquer
- Runtime: 3
- Memory: 19412000
- Submitted at: 2026-06-03T07:09:06.000Z
- Submission ID: 2020960511

## Pattern

Sort-and-index baseline.

## Key Idea

This accepted solution concatenates the two arrays, sorts the combined list, then reads the middle element or average of the two middle elements. It is simple and correct, but it does not use the intended hard-problem idea: binary-searching the partition between the two sorted arrays. This is a good example of a baseline that passes but should not be mistaken for the optimal pattern.

## Mistake / Edge Case

The even-length case needs the two middle indices in the right order: `l2` and `l2 - 1`. The deeper issue is complexity: if a problem explicitly asks for logarithmic time, sorting the whole combined array is not the final learning target.

## Complexity

- Time: O((n + m) log(n + m))
- Space: O(n + m)

## What Adrian Should Remember

For "two sorted arrays" hard problems, write the simple baseline if needed, then study the binary partition invariant.
