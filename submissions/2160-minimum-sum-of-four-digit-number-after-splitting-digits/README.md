# Minimum Sum of Four Digit Number After Splitting Digits

- LeetCode: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
- Language: python3
- Exported at: 2026-06-08T06:44:08.796Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Greedy, Sorting
- Memory: 19296000
- Submitted at: 2026-06-08T06:44:04.000Z
- Submission ID: 2026044533

## Pattern

Greedy digit distribution.

## Key Idea

To minimize the sum of two new numbers, put the smallest digits in the tens places and the larger digits in the ones places. The code removes zeros from the explicit digit list, handles short nonzero cases, then sorts the remaining digits and distributes them. The problem is normally four digits including zeros, so a clearer version would sort all four digits and return `10*d0 + 10*d1 + d2 + d3`.

## Mistake / Edge Case

Zeros are meaningful digits in the original problem; this solution still works for accepted cases here, but the zero filtering makes the reasoning less transparent.

## Complexity

- Time: O(d log d), with d = 4 here
- Space: O(d)

## What Adrian Should Remember

For digit-greedy problems, keep zeros in the model unless there is a deliberate reason to remove them.
