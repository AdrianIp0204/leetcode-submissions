# Check If Digits Are Equal in String After Operations I

- LeetCode: https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/
- Language: python3
- Exported at: 2026-06-18T13:28:05.553Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String, Simulation, Combinatorics, Number Theory
- Runtime: 23
- Memory: 19352000
- Submitted at: 2026-06-18T13:28:01.000Z
- Submission ID: 2037609897

## Pattern

Digit simulation

## Key Idea

Repeatedly replace adjacent digit pairs with their sum modulo 10 until two
digits remain, then compare those final two digits.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: each reduction shortens the current
digit list by one.

## Complexity

- Time: O(n^2)
- Space: O(n)
