# Product of Array Except Self

- LeetCode: https://leetcode.com/problems/product-of-array-except-self/
- Language: python3
- Exported at: 2026-06-06T05:34:24.405Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Prefix Sum
- Runtime: 16
- Memory: 25416000
- Submitted at: 2026-06-06T04:58:19.000Z
- Submission ID: 2023838199

## Pattern

Prefix / suffix products.

## Key Idea

The result for each index is the product of everything to its left times the product of everything to its right. The first pass stores left products in `res`; the second pass walks backward with a running suffix product and multiplies it into each result. This avoids division and handles zero values naturally.

## Mistake / Edge Case

The invariant matters: before updating `pre`, `res[i]` should receive the product of values before `i`; before updating `suf`, `res[i]` should be multiplied by the product of values after `i`.

## Complexity

- Time: O(n)
- Space: O(1) extra space if the output array does not count.

## What Adrian Should Remember

Prefix/suffix problems often become simple if each pass has one clear invariant.
