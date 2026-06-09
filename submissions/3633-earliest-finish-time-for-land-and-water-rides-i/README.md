# Earliest Finish Time for Land and Water Rides I

- LeetCode: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i/
- Language: python3
- Exported at: 2026-06-02T11:30:07.562Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-02T08:13:07.000Z
- Submission ID: 2019945070

## Pattern

Two-order scheduling minimum.

## Key Idea

Compute the earliest possible finish time for any land ride and any water ride. Then test both orders: land first then each water ride, and water first then each land ride. The answer is the minimum finish time across those possibilities.

## Mistake / Edge Case

The second ride can start only after both its own start time and the first ride's finish time.

## Complexity

- Time: O(n + m)
- Space: O(1)

## What Adrian Should Remember

For two-stage scheduling, reduce each first-stage category to its earliest finish, then test the second stage.
