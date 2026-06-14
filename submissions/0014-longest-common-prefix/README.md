# Longest Common Prefix

- LeetCode: https://leetcode.com/problems/longest-common-prefix/
- Language: python3
- Exported at: 2026-06-02T11:30:10.287Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T11:39:36.000Z
- Submission ID: 2018118279

## Pattern

Shortest-string prefix scan.

## Key Idea

The code converts each string to a list, sorts by length, and uses the shortest string as the maximum possible prefix. It checks each character position against every string and returns the prefix built so far at the first mismatch. The core idea is right: no common prefix can be longer than the shortest string.

## Mistake / Edge Case

The first mismatch should return immediately, including when the answer is the empty string. The conversion to lists is unnecessary and costs extra memory.

## Complexity

- Time: O(m log m + m * p), where `m` is the number of strings and `p` is the shortest length
- Space: O(total characters), because the code copies strings into lists

## What Adrian Should Remember

Use the shortest candidate as the boundary when checking a common prefix.
