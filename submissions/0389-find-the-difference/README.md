# Find the Difference

- LeetCode: https://leetcode.com/problems/find-the-difference/
- Language: python3
- Exported at: 2026-06-10T15:00:28.504Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Bit Manipulation, Sorting
- Runtime: 3
- Memory: 19200000
- Submitted at: 2026-06-10T15:00:23.000Z
- Submission ID: 2028753982

## Pattern

xor cancellation.

## Key Idea

XOR all characters from both strings. Matching characters cancel to zero, leaving only the added character's code.

## Mistake / Edge Case

This works regardless of order because XOR is associative and commutative.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When every item appears twice except one, XOR is a compact cancellation tool.
