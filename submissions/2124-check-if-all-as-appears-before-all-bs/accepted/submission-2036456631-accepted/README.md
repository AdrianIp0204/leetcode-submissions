# Check if All A's Appears Before All B's

- LeetCode: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
- Language: python3
- Exported at: 2026-06-17T14:11:11.585Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19120000
- Submitted at: 2026-06-17T14:11:09.000Z
- Submission ID: 2036456631

## Pattern

State flag scan

## Key Idea

Track whether a `b` has been seen. Once the scan has entered the `b` region,
any later `a` makes the string invalid.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: strings with only one letter type are
valid.

## Complexity

- Time: O(n)
- Space: O(1)
