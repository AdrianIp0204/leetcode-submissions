# First Unique Character in a String

- LeetCode: https://leetcode.com/problems/first-unique-character-in-a-string/
- Language: python3
- Exported at: 2026-06-02T11:30:22.917Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-28T06:04:43.000Z
- Submission ID: 2015173541

## Pattern

Frequency map plus second scan.

## Key Idea

The solution first counts each character, then scans the string again to find the first index whose count is one. The second scan is necessary because the answer depends on original order, not just frequency. This is the standard readable approach.

## Mistake / Edge Case

If no character is unique, the function must return `-1`. Building only the frequency map is not enough; the order-preserving second pass finds the earliest unique character.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters

## What Adrian Should Remember

For "first unique", count first, then scan in original order.
