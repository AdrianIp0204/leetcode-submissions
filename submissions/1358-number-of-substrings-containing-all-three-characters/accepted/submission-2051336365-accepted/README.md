# Number of Substrings Containing All Three Characters

- LeetCode: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
- Language: python3
- Exported at: 2026-06-30T14:51:54.978Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String, Sliding Window
- Runtime: 81
- Memory: 19536000
- Submitted at: 2026-06-30T14:51:49.000Z
- Submission ID: 2051336365

## Pattern

Sliding window / count suffixes

## Key Idea

Maintain a window with counts of `a`, `b`, and `c`; whenever all three are
present, every suffix extension from the current right edge is valid.

## Mistake / Edge Case

No code-supported personal mistake recorded.

## Complexity

- Time: O(n)
- Space: O(1)
