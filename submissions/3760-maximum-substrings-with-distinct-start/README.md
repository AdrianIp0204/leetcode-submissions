# Maximum Substrings With Distinct Start

- LeetCode: https://leetcode.com/problems/maximum-substrings-with-distinct-start/
- Language: python3
- Exported at: 2026-06-13T10:50:43.313Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String
- Runtime: 7
- Memory: 19736000
- Submitted at: 2026-06-13T10:50:40.000Z
- Submission ID: 2031684982

## Pattern

set of starting characters.

## Key Idea

The maximum number of substrings with distinct starts is the number of distinct characters available as starts, so count unique characters.

## Mistake / Edge Case

Repeated occurrences of the same starting character do not increase the count.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## What Adrian Should Remember

When only distinct starts matter, count distinct start symbols, not substrings themselves.
