# Combine Two Tables

- LeetCode: https://leetcode.com/problems/combine-two-tables/
- Language: txt
- Exported at: 2026-06-04T05:17:46.888Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T05:17:42.000Z
- Submission ID: 2021889402

## Pattern

Left join with Pandas.

## Key Idea

The solution performs a left merge from `Person` to `Address` on `personId`, then selects the required output columns. A left join is the key choice because every person should remain in the result even when no address row exists. Missing address fields become null values in the returned DataFrame.

## Mistake / Edge Case

Using an inner join would silently drop people without addresses. The output column order also matters for LeetCode's database-style checker.

## Complexity

- Time: O(p + a) expected for the merge, where `p` is people and `a` is addresses
- Space: O(p + a) for the merged frame and output

## What Adrian Should Remember

When the wording says "regardless of whether there is matching data", think left join.
