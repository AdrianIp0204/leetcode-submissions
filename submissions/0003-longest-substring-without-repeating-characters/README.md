# Longest Substring Without Repeating Characters

- LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
- Language: python3
- Exported at: 2026-06-03T02:47:16.297Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String, Sliding Window
- Runtime: 1171
- Memory: 19252000
- Submitted at: 2026-06-03T02:47:15.000Z
- Submission ID: 2020730229

## Pattern

Sliding window baseline.

## Key Idea

This accepted solution tries every starting index and grows a temporary list until it sees a duplicate. It captures the right idea that a valid window cannot contain repeated characters, but it rebuilds work from many starts instead of maintaining one moving window. The cleaner solution keeps a left pointer and a map/set of seen characters, moving `left` past the previous duplicate when needed.

## Mistake / Edge Case

The main trap is losing the best window when the string ends without a final duplicate; the final `max(c, len(tmp))` handles that. A list also makes membership checks linear, so this solution gets slow quickly.

## Complexity

- Time: O(n^3) in the worst case because of nested scans plus list membership checks
- Space: O(n)

## What Adrian Should Remember

When a substring problem says "without repeating", reach for a sliding window with a set or last-seen index map.
