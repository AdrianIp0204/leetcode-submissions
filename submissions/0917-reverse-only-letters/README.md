# Reverse Only Letters

- LeetCode: https://leetcode.com/problems/reverse-only-letters/
- Language: python3
- Exported at: 2026-06-11T06:11:26.963Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String
- Memory: 19368000
- Submitted at: 2026-06-11T06:11:22.000Z
- Submission ID: 2029363144

## Pattern

two pointers / filtered reverse.

## Key Idea

Scan output positions from the left. When the current character is a letter, take the next letter from the right; otherwise copy the non-letter unchanged.

## Mistake / Edge Case

Non-letters keep their original positions, so the right pointer should skip them but the left scan should still append them.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Selective reversal means movable characters reverse, fixed characters stay in their slots.
