# Combinations

- LeetCode: https://leetcode.com/problems/combinations/
- Language: python3
- Exported at: 2026-06-22T08:04:14.905Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Backtracking
- Runtime: 7
- Memory: 58496000
- Submitted at: 2026-06-22T08:04:12.000Z
- Submission ID: 2041863895

## Pattern

Combination generation

## Key Idea

Use `itertools.combinations` over the ordered range `1..n` to enumerate each size-`k` combination once.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: the generated range must include `n`.

## Complexity

- Time: O(C(n, k) * k)
- Space: O(C(n, k) * k)
