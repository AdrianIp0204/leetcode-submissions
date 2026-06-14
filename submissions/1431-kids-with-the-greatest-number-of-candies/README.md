# Kids With the Greatest Number of Candies

- LeetCode: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
- Language: python3
- Exported at: 2026-06-08T06:29:42.794Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Memory: 19152000
- Submitted at: 2026-06-08T06:29:37.000Z
- Submission ID: 2026028370

## Pattern

Single-pass threshold check.

## Key Idea

First find the current maximum candy count. Each child can have the greatest number after receiving the extra candies if their current count plus the extra amount reaches at least that maximum. The result is a boolean list built in the same order as the input.

## Mistake / Edge Case

Use greater-than-or-equal, not only greater-than, because tying for the maximum still counts.

## Complexity

- Time: O(n)
- Space: O(n), for the returned boolean list

## What Adrian Should Remember

Compute the fixed benchmark once, then compare every candidate against it.
