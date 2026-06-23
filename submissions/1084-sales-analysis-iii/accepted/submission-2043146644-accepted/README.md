# Sales Analysis III

- LeetCode: https://leetcode.com/problems/sales-analysis-iii/
- Language: txt
- Exported at: 2026-06-23T08:48:20.826Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 500
- Memory: 70208000
- Submitted at: 2026-06-23T08:48:19.000Z
- Submission ID: 2043146644

## Pattern

Group-level date filter

## Key Idea

For each product, keep only groups whose sale dates are all in the accepted window, then join product names and remove duplicates.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: a product with any sale outside the date window must be excluded.

## Complexity

- Time: O(s + p) expected
- Space: O(s + p)
