# Product Sales Analysis I

- LeetCode: https://leetcode.com/problems/product-sales-analysis-i/
- Language: txt
- Exported at: 2026-06-23T12:19:20.240Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 349
- Memory: 70412000
- Submitted at: 2026-06-23T12:19:17.000Z
- Submission ID: 2043367790

## Pattern

join / select columns

## Key Idea

Join `product` to `sales` on `product_id`, then project only the requested
`product_name`, `year`, and `price` columns.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(p + s) expected for the merge
- Space: O(p + s) for the joined frame
