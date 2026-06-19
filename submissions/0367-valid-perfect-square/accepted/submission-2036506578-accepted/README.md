# Valid Perfect Square

- LeetCode: https://leetcode.com/problems/valid-perfect-square/
- Language: python3
- Exported at: 2026-06-17T14:59:46.751Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Binary Search
- Memory: 19468000
- Submitted at: 2026-06-17T14:59:39.000Z
- Submission ID: 2036506578

## Pattern

Binary search on answer

## Key Idea

Search possible square roots and compare `mid * mid` with `n`, moving the
range right when the square is too small and left when it is too large.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: small inputs need explicit handling
before using `n // 2` as the upper bound.

## Complexity

- Time: O(log n)
- Space: O(1)
