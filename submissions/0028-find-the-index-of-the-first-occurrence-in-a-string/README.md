# Find the Index of the First Occurrence in a String

- LeetCode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
- Language: python3
- Exported at: 2026-06-07T07:56:28.744Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String, String Matching
- Memory: 19356000
- Submitted at: 2026-06-06T10:09:13.000Z
- Submission ID: 2024107341

## Pattern

Built-in substring search.

## Key Idea

The solution delegates the search to Python: first check whether `needle` is in `haystack`, then return `haystack.index(needle)` or `-1`. This is concise and accepted, but it does not practice the string-matching algorithms behind the problem. For learning, the next step would be a manual scan or KMP-style prefix table.

## Mistake / Edge Case

An empty `needle` should return `0`; Python's substring behavior handles that naturally. The main learning gap is that the code hides the matching loop inside built-ins.

## Complexity

- Time: O(h * n) worst case conceptually, depending on Python's string-search implementation
- Space: O(1)

## What Adrian Should Remember

Built-ins are fine for accepted code, but if the tag says string matching, know what loop the built-in is saving you from writing.
