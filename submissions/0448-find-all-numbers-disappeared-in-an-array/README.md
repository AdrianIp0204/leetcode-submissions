# Find All Numbers Disappeared in an Array

- LeetCode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
- Language: python3
- Exported at: 2026-06-07T07:56:18.709Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table
- Runtime: 59
- Memory: 37760000
- Submitted at: 2026-06-07T07:06:00.000Z
- Submission ID: 2025100266

## Pattern

Frequency map baseline.

## Key Idea

The solution creates a dictionary for every expected number from `1` to `n`, counts the numbers that appear, then returns the keys whose count stayed zero. This is clear and accepted. The intended in-place trick would mark seen indices in the input array to avoid extra storage.

## Mistake / Edge Case

The expected range is `1..len(nums)`, not `0..len(nums)-1`. That is why the dictionary starts at `1` and ends at `len(nums)`.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For missing-values-in-range problems, write the exact expected range before coding.
