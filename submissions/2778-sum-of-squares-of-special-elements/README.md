# Sum of Squares of Special Elements 

- LeetCode: https://leetcode.com/problems/sum-of-squares-of-special-elements/
- Language: python3
- Exported at: 2026-06-07T07:56:23.111Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Enumeration
- Memory: 19216000
- Submitted at: 2026-06-07T03:32:13.000Z
- Submission ID: 2024930696

## Pattern

Index divisibility filter.

## Key Idea

The problem uses 1-based positions. While enumerating with zero-based indices, test whether the array length is divisible by `i + 1`. Add the square of values at special positions.

## Mistake / Edge Case

Convert the zero-based index to a one-based position before the divisibility test.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Whenever a problem states 1-indexed positions, make the conversion visible in the code.
