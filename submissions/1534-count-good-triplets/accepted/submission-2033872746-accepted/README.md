# Count Good Triplets

- LeetCode: https://leetcode.com/problems/count-good-triplets/
- Language: python3
- Exported at: 2026-06-15T11:27:08.198Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Enumeration
- Runtime: 184
- Memory: 19412000
- Submitted at: 2026-06-15T11:27:06.000Z
- Submission ID: 2033872746

## Pattern

Brute-force enumeration

## Key Idea

Try every increasing triple and count the triples whose pairwise differences satisfy the three bounds.

## Mistake / Edge Case

Check the first bound before entering the innermost loop to avoid unnecessary work.

## Complexity

- Time: O(n^3)
- Space: O(1)
