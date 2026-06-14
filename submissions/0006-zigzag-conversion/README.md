# Zigzag Conversion

- LeetCode: https://leetcode.com/problems/zigzag-conversion/
- Language: python3
- Exported at: 2026-06-05T14:10:07.695Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: String
- Runtime: 9
- Memory: 19220000
- Submitted at: 2026-06-03T08:55:44.000Z
- Submission ID: 2021050771

## Pattern

String indexing by cycle.

## Key Idea

The zigzag pattern repeats every `2 * (numRows - 1)` characters. For each row, the code takes the vertical character at that row offset, then for middle rows also takes the diagonal character inside the same cycle. This avoids building a full grid and reads the answer directly in row order.

## Mistake / Edge Case

`numRows == 1` would make the cycle length zero, so it has to return the original string early. The middle-row diagonal index is the part most likely to go off by one.

## Complexity

- Time: O(n) algorithmically, but repeated Python string concatenation can make the accepted code closer to O(n^2)
- Space: O(n) for the output
