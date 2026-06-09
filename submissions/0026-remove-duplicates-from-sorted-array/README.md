# Remove Duplicates from Sorted Array

- LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- Language: python3
- Exported at: 2026-06-07T07:56:30.806Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers
- Memory: 20604000
- Submitted at: 2026-06-06T07:10:54.000Z
- Submission ID: 2023961389

## Pattern

Set-and-sort baseline; intended pattern is two pointers.

## Key Idea

The accepted code replaces the whole array with `sorted(set(nums))` and returns the new length. That works for the LeetCode contract because the input is sorted integers and only the first `k` elements matter afterward. It is not the intended in-place two-pointer solution, because it allocates a set and sorts instead of compacting unique values as it scans.

## Mistake / Edge Case

The slice assignment `nums[:] = ...` is what makes the caller's list change in place. Without that, rebinding `nums` would not satisfy the problem.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

If an array is already sorted and the task says "in place", try a write pointer before reaching for `set`.
