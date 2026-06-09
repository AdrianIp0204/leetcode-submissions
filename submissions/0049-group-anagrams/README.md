# Group Anagrams

- LeetCode: https://leetcode.com/problems/group-anagrams/
- Language: python3
- Exported at: 2026-06-06T05:34:24.890Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, String, Sorting
- Runtime: 631
- Memory: 23836000
- Submitted at: 2026-06-06T04:34:35.000Z
- Submission ID: 2023820169

## Pattern

Hashing / canonical key.

## Key Idea

For each string, the code builds a frequency dictionary of its letters. Strings with the same frequency dictionary are anagrams, so they belong in the same group. This accepted version stores the dictionaries in a list and uses `index`, which works but is slower than using a tuple of counts or sorted string as a dictionary key.

## Mistake / Edge Case

The important design choice is the group key. A mutable dictionary cannot be used directly as a key in another Python dictionary, so this code keeps a list of seen frequency dictionaries; next time, convert the frequency to an immutable tuple.

## Complexity

- Time: O(n * k * g) for this version, where `n` is number of strings, `k` is max string length, and `g` is number of groups scanned by `freq_list.index`.
- Space: O(n * k)

## What Adrian Should Remember

When grouping things, spend time choosing the key; a good immutable key usually makes the solution simpler and faster.
