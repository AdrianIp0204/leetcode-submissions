# Single Number

- LeetCode: https://leetcode.com/problems/single-number/
- Language: python3
- Exported at: 2026-06-09T01:42:21.679Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Bit Manipulation
- Runtime: 3
- Memory: 21076000
- Submitted at: 2026-06-09T01:42:19.000Z
- Submission ID: 2026908028

## Pattern

Bit manipulation with XOR.

## Key Idea

XOR cancels equal numbers because `a ^ a = 0`, and `0 ^ b = b`. Since every duplicate appears exactly twice, folding XOR across the whole array leaves only the single unpaired value. This is the intended constant-space trick.

## Mistake / Edge Case

This pattern depends on the exact constraint that every other value appears twice. If counts change to three times, XOR is no longer enough.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When pairs cancel and one value remains, XOR is often the cleanest constant-space tool.
