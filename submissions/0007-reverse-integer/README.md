# Reverse Integer

- LeetCode: https://leetcode.com/problems/reverse-integer/
- Language: python3
- Exported at: 2026-06-02T11:30:13.599Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T03:23:27.000Z
- Submission ID: 2017739714

## Pattern

Digit/string reversal with bounds check.

## Key Idea

The solution handles sign separately by removing the `-`, reversing the remaining digit characters, stripping leading zeroes from the reversed form, and then applying the sign back. It accepts only values inside the signed 32-bit integer range. This is a straightforward string-based solution rather than the arithmetic digit-pop version.

## Mistake / Edge Case

The zero case must be handled before stripping leading zeroes, otherwise the list can become empty. The overflow checks for `-2^31` and values greater than `2^31 - 1` are the important correctness guard.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(d)

## What Adrian Should Remember

When a problem has fixed integer bounds, solve the main transformation first, then explicitly clamp or reject overflow.
