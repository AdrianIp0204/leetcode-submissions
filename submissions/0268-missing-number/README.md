# Missing Number

- LeetCode: https://leetcode.com/problems/missing-number/
- Language: python3
- Exported at: 2026-06-08T09:43:13.292Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting
- Runtime: 1406
- Memory: 20488000
- Submitted at: 2026-06-08T09:43:07.000Z
- Submission ID: 2026212928

## Pattern

Linear scan with list membership; intended pattern is math, XOR, or set.

## Key Idea

The accepted code tries every value from `0` to `n` and returns the first one not found in the list. It is simple and correct, but `i in nums` is a linear search each time, so the solution repeats work. Better versions use the expected sum, XOR cancellation, or a set for O(n) behavior.

## Mistake / Edge Case

The missing number can be `0` or `n`, so the range must include both ends with `range(len(nums) + 1)`. The performance trap is hidden in Python's list membership check.

## Complexity

- Time: O(n^2)
- Space: O(1)

## What Adrian Should Remember

When you write `x in some_list` inside a loop, pause and ask whether you just created a nested scan.
