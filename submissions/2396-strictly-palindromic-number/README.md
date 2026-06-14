# Strictly Palindromic Number

- LeetCode: https://leetcode.com/problems/strictly-palindromic-number/
- Language: python3
- Exported at: 2026-06-13T10:55:32.228Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math, Two Pointers, Brainteaser
- Memory: 19288000
- Submitted at: 2026-06-13T10:55:26.000Z
- Submission ID: 2031688954

## Pattern

brainteaser proof.

## Key Idea

No `n >= 4` is strictly palindromic because in base `n - 2`, the representation of `n` is `12`, which is not a palindrome.

## Mistake / Edge Case

The input constraints make the answer always false; do not waste time converting every base.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

A single counterexample base can disprove a for-all-base condition.
