# Article Views I

- LeetCode: https://leetcode.com/problems/article-views-i/
- Language: txt
- Exported at: 2026-06-23T08:20:45.865Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 283
- Memory: 67720000
- Submitted at: 2026-06-23T08:20:43.000Z
- Submission ID: 2043117175

## Pattern

Self-action filter

## Key Idea

Filter rows where `author_id == viewer_id`, keep unique authors, rename the column to `id`, and sort.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: one author can appear in multiple matching rows, so duplicates must be removed.

## Complexity

- Time: O(n log n)
- Space: O(n)
