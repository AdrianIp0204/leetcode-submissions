# Perfect Number

- LeetCode: https://leetcode.com/problems/perfect-number/
- Language: typescript
- Exported at: 2026-06-11T13:52:16.616Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Runtime: 1
- Memory: 55840000
- Submitted at: 2026-06-11T13:52:11.000Z
- Submission ID: 2029798025

## Pattern

factor pairs up to square root.

## Key Idea

Start with divisor `1`, scan possible divisors up to `sqrt(num)`, and add both members of each factor pair. A number is perfect when that proper-divisor sum equals the number.

## Mistake / Edge Case

Numbers `<= 1` are not perfect, and square roots should only be added once when the pair is the same divisor.

## Complexity

- Time: O(sqrt(n))
- Space: O(1)

## What Adrian Should Remember

For divisor sums, scan to the square root and account for the paired divisor.
