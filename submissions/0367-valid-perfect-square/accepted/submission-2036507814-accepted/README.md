# Valid Perfect Square

- LeetCode: https://leetcode.com/problems/valid-perfect-square/
- Language: python3
- Exported at: 2026-06-17T15:00:54.829Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Binary Search
- Memory: 19168000
- Submitted at: 2026-06-17T15:00:52.000Z
- Submission ID: 2036507814

## Pattern

Binary search on answer

## Key Idea

Search possible square roots and compare `mid * mid` with `n`, moving the
range right when the square is too small and left when it is too large.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: `n == 1` is accepted before the
search range starts at `2`.

## Complexity

- Time: O(log n)
- Space: O(1)
