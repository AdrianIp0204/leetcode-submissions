# Smallest Integer Divisible by K

- LeetCode: https://leetcode.com/problems/smallest-integer-divisible-by-k/
- Language: python3
- Exported at: 2026-06-02T11:30:18.617Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-29T12:18:33.000Z
- Submission ID: 2016408416

## Pattern

Remainder simulation.

## Key Idea

The solution builds the repunit number only as a remainder: each new digit updates `remainder = (remainder * 10 + 1) % k`. If the remainder becomes zero, the current length is divisible by `k`. If `k` has a factor of `2` or `5`, no number made only of ones can be divisible by it.

## Mistake / Edge Case

Actually constructing the repeated-ones integer can become enormous. Tracking only the remainder keeps the values bounded.

## Complexity

- Time: O(k)
- Space: O(1)

## What Adrian Should Remember

For divisibility of a growing number, update the remainder instead of storing the full number.
