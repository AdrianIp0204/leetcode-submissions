# Reverse Bits

- LeetCode: https://leetcode.com/problems/reverse-bits/
- Language: python3
- Exported at: 2026-06-12T11:02:05.271Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Divide and Conquer, Bit Manipulation
- Runtime: 51
- Memory: 19124000
- Submitted at: 2026-06-12T11:02:00.000Z
- Submission ID: 2030731509

## Pattern

fixed-width bit formatting.

## Key Idea

Format the integer as exactly 32 binary bits, reverse that string, then parse it back as base 2.

## Mistake / Edge Case

The width must be fixed at 32 bits so leading zeros become trailing zeros after reversal.

## Complexity

- Time: O(1), because the width is always 32
- Space: O(1)

## What Adrian Should Remember

When the bit width is fixed and tiny, a clear formatting solution is acceptable.
