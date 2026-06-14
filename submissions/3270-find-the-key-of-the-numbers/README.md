# Find the Key of the Numbers

- LeetCode: https://leetcode.com/problems/find-the-key-of-the-numbers/
- Language: python3
- Exported at: 2026-06-08T04:31:20.352Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Runtime: 2
- Memory: 19220000
- Submitted at: 2026-06-08T01:59:31.000Z
- Submission ID: 2025822299

## Pattern

Digit-wise minimum construction.

## Key Idea

Process four digit positions from right to left. At each position, take the minimum digit among the three numbers and place it into the same position of the result. Integer division advances all three numbers to the next digit.

## Mistake / Edge Case

Missing leading digits are effectively zero because repeated division eventually makes the number zero.

## Complexity

- Time: O(1), exactly four digit positions
- Space: O(1)

## What Adrian Should Remember

For fixed-width digit construction, use a place-value multiplier to rebuild the answer.
