# Find the Encrypted String

- LeetCode: https://leetcode.com/problems/find-the-encrypted-string/
- Language: typescript
- Exported at: 2026-06-10T12:57:02.233Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 56960000
- Submitted at: 2026-06-10T12:56:57.000Z
- Submission ID: 2028642627

## Pattern

cyclic string rotation.

## Key Idea

Reduce `k` modulo the string length, then move the first `k` characters to the end.

## Mistake / Edge Case

When `k` is a multiple of the length, the modulo is zero and the string stays unchanged.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For circular shifts, always reduce the shift by the length first.
