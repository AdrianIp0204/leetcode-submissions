# Mirror Distance of an Integer

- LeetCode: https://leetcode.com/problems/mirror-distance-of-an-integer/
- Language: cpp
- Exported at: 2026-06-13T10:15:33.999Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 8484000
- Submitted at: 2026-06-13T10:15:31.000Z
- Submission ID: 2031654015

## Pattern

digit reversal.

## Key Idea

Reverse the decimal digits arithmetically, then return the absolute difference between the original and reversed number.

## Mistake / Edge Case

Store the original value before consuming `n` in the reversal loop.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(1)

## What Adrian Should Remember

If a digit loop destroys the input, save the original first.
