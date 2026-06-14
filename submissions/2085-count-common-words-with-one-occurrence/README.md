# Count Common Words With One Occurrence

- LeetCode: https://leetcode.com/problems/count-common-words-with-one-occurrence/
- Language: python3
- Exported at: 2026-06-12T07:39:45.077Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String, Counting
- Runtime: 3
- Memory: 19684000
- Submitted at: 2026-06-12T07:39:39.000Z
- Submission ID: 2030544721

## Pattern

Counter frequency filtering.

## Key Idea

Count both word lists, then count words whose frequency is exactly one in both Counters.

## Mistake / Edge Case

A word that appears once in one list but multiple times in the other does not count.

## Complexity

- Time: O(n + m)
- Space: O(u + v)

## What Adrian Should Remember

When the rule says exactly once, membership alone is not enough; frequency matters.
