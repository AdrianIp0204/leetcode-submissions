# Minimum Cost of Buying Candies With Discount

- LeetCode: https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
- Language: python3
- Exported at: 2026-06-02T11:30:08.720Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-01T14:28:02.000Z
- Submission ID: 2019197117

## Pattern

Greedy sorted grouping.

## Key Idea

Sort candies from most expensive to least expensive. In every group of three, pay for the first two and get the third free, so subtract every third candy starting at index two. This maximizes the discount because expensive candies are grouped first.

## Mistake / Edge Case

The free candy in each group is the cheapest of that group, so sort descending before grouping.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## What Adrian Should Remember

For buy-two-get-one style discounts, sort so each free item is as valuable as the rules allow.
