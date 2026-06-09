# Palindrome Number

- LeetCode: https://leetcode.com/problems/palindrome-number/
- Language: python3
- Exported at: 2026-06-08T06:14:43.985Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Runtime: 30
- Memory: 19484000
- Submitted at: 2026-05-15T08:43:32.000Z
- Submission ID: 2003645069

## Pattern

Digit extraction baseline.

## Key Idea

This solution extracts digits by powers of ten, reconstructs the individual digit list, and compares it with its reverse. It works, but it is more complicated than necessary for the problem. A simpler version would either compare `str(x)` with its reverse, or reverse half of the integer arithmetically.

## Mistake / Edge Case

Negative numbers are not palindromes even if their absolute digits mirror, so the final `x > 0` check matters. `0` also needs a special case because `log10(0)` is undefined.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(d)

## What Adrian Should Remember

Before doing manual digit math, check whether the problem is testing the idea or just the representation.
