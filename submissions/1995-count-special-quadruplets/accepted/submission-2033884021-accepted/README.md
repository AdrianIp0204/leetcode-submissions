# Count Special Quadruplets

- LeetCode: https://leetcode.com/problems/count-special-quadruplets/
- Language: python3
- Exported at: 2026-06-15T11:39:54.204Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Enumeration
- Runtime: 511
- Memory: 19424000
- Submitted at: 2026-06-15T11:39:50.000Z
- Submission ID: 2033884021

## Pattern

Brute-force enumeration

## Key Idea

Try every increasing quadruplet and count the ones where the first three values sum to the fourth.

## Mistake / Edge Case

The four loops preserve index order, so the equality check only needs to compare values.

## Complexity

- Time: O(n^4)
- Space: O(1)
