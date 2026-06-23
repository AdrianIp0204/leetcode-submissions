# Daily Leads and Partners

- LeetCode: https://leetcode.com/problems/daily-leads-and-partners/
- Language: txt
- Exported at: 2026-06-23T05:43:00.439Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 356
- Memory: 68048000
- Submitted at: 2026-06-23T05:42:57.000Z
- Submission ID: 2042936991

## Pattern

Grouped distinct counts

## Key Idea

Group by `make_name` and `date_id`, then count distinct `lead_id` and `partner_id` values.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: repeated lead or partner ids within a group should count once.

## Complexity

- Time: O(n) expected
- Space: O(n)
