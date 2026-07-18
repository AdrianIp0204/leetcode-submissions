# Product Sales Analysis III

- LeetCode: https://leetcode.com/problems/product-sales-analysis-iii/
- Language: txt
- Exported at: 2026-06-23T12:31:03.503Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Database
- Runtime: 359
- Memory: 69636000
- Submitted at: 2026-06-23T12:31:02.000Z
- Submission ID: 2043378046

## Pattern

Group by minimum year, then join back to source rows

## Key Idea

Find each product's earliest `year`, merge those `(product_id, year)` pairs
back into `sales`, then return the first-year rows with quantity and price.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: multiple sales rows can share the
same earliest year for a product, and all first-year rows should be retained.

## Complexity

- Time: O(n) expected for grouping and merge
- Space: O(n)
