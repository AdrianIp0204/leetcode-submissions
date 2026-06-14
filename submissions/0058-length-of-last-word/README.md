# Length of Last Word

- LeetCode: https://leetcode.com/problems/length-of-last-word/
- Language: python3
- Exported at: 2026-06-09T06:02:15.085Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19368000
- Submitted at: 2026-06-09T06:02:11.000Z
- Submission ID: 2027115602

## Pattern

String split.

## Key Idea

The solution uses `s.split()` to ignore repeated spaces and trailing spaces, then takes the last word and returns its length. This is the simplest Pythonic version. A manual version would scan from the end, skip spaces, and count characters until the previous space.

## Mistake / Edge Case

Trailing spaces are the trap; splitting without arguments handles them correctly. The problem guarantees at least one word, so `[-1]` is safe under the LeetCode constraints.

## Complexity

- Time: O(n)
- Space: O(n), because `split()` builds a list of words

## What Adrian Should Remember

For string cleanup tasks, know whether a built-in removes empty chunks and trailing separators.
