# Maximum Number of Balloons

- LeetCode: https://leetcode.com/problems/maximum-number-of-balloons/
- Language: python3
- Exported at: 2026-06-22T04:12:52.885Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Counting
- Runtime: 3
- Memory: 19440000
- Submitted at: 2026-06-22T04:12:51.000Z
- Submission ID: 2041584629

## Pattern

Frequency counting

## Key Idea

Count the characters in `text`, then divide the counts for `l` and `o` by two because each `balloon` needs two of each.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: if any required character is absent, no `balloon` can be formed.

## Complexity

- Time: O(n), where n is the length of `text`
- Space: O(k), where k is the number of distinct characters counted
