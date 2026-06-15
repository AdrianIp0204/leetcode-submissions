# Find the Most Common Response

- LeetCode: https://leetcode.com/problems/find-the-most-common-response/
- Language: python3
- Exported at: 2026-06-15T13:56:24.528Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, String, Counting
- Runtime: 399
- Memory: 205948000
- Submitted at: 2026-06-15T13:56:23.000Z
- Submission ID: 2034006774

## Pattern

Per-row deduplication and counting

## Key Idea

Within each response list, count a word at most once, then choose the globally highest count with lexicographic tie-break.

## Mistake / Edge Case

Reset the per-row `seen` set for each response list so duplicates inside one row do not inflate the count.

## Complexity

- Time: O(total responses + u log u)
- Space: O(u)
