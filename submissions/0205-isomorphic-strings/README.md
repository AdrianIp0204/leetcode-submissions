# Isomorphic Strings

- LeetCode: https://leetcode.com/problems/isomorphic-strings/
- Language: python3
- Exported at: 2026-06-10T14:46:14.009Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Runtime: 2
- Memory: 19056000
- Submitted at: 2026-06-10T14:46:08.000Z
- Submission ID: 2028740689

## Pattern

one-to-one character mapping.

## Key Idea

Map each character from `s` to exactly one character in `t`, and keep a separate used set so two source characters cannot claim the same target character.

## Mistake / Edge Case

Checking only `s -> t` is not enough; `ab` and `aa` would otherwise look valid unless target characters are marked as already used.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct mapped characters

## What Adrian Should Remember

Isomorphism needs both consistency and uniqueness of the mapping.
