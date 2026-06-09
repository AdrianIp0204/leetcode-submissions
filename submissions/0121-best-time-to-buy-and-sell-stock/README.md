# Best Time to Buy and Sell Stock

- LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
- Language: python3
- Exported at: 2026-06-05T14:09:35.523Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Dynamic Programming
- Runtime: 41
- Memory: 28572000
- Submitted at: 2026-06-05T13:51:31.000Z
- Submission ID: 2023327921

## Pattern

One-pass minimum tracking.

## Key Idea

Track the cheapest price seen so far and the best profit that could be made by selling today. When the current price is lower than the saved minimum, update the minimum. Otherwise, compare `current - minimum` with the best profit.

## Mistake / Edge Case

The no-profit case should return 0, not a negative number. The code does that by initializing `res` to 0 and only updating it when a positive improvement appears.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For single-buy/single-sell stock problems, "best sell today" only needs the minimum price before today.
