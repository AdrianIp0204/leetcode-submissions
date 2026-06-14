# Permutation Difference between Two Strings

- LeetCode: https://leetcode.com/problems/permutation-difference-between-two-strings/
- Language: python3
- Exported at: 2026-06-07T07:56:24.137Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Runtime: 3
- Memory: 19488000
- Submitted at: 2026-06-07T03:14:19.000Z
- Submission ID: 2024909757

## Pattern

Index map comparison.

## Key Idea

Record each character's index in the first string. Then scan the second string and add the absolute difference between its current index and the stored original index. Because the strings are permutations, every character lookup should exist.

## Mistake / Edge Case

The index map assumes unique characters, matching this problem's constraints.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For permutation distance, build one position map and compare the other sequence against it.
