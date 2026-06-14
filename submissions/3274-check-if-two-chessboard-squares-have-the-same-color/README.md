# Check if Two Chessboard Squares Have the Same Color

- LeetCode: https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/
- Language: typescript
- Exported at: 2026-06-10T14:08:06.374Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String
- Runtime: 45
- Memory: 56100000
- Submitted at: 2026-06-10T14:08:01.000Z
- Submission ID: 2028705370

## Pattern

parity on board coordinates.

## Key Idea

A chessboard square color is determined by the parity of file plus rank. Two squares match when those parities match.

## Mistake / Edge Case

Convert the file letter with `charCodeAt` and the rank character to a number before adding.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Checkerboard color is just coordinate parity.
