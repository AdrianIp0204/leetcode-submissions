# Factorial Trailing Zeroes

- LeetCode: https://leetcode.com/problems/factorial-trailing-zeroes/
- Language: python3
- Exported at: 2026-06-05T14:10:04.932Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math
- Memory: 19228000
- Submitted at: 2026-06-03T09:43:58.000Z
- Submission ID: 2021094736

## Pattern

Factor counting.

## Key Idea

Trailing zeroes come from factors of `10`, and every `10` is a pair of `2 * 5`. Factorials contain many more twos than fives, so the answer is the count of factors of five in `n!`. Dividing by `5`, then `25`, then `125`, and so on counts numbers that contribute multiple fives.

## Mistake / Edge Case

Multiples of `25`, `125`, etc. contribute more than one trailing zero. Counting only `n // 5` misses those extra factors.

## Complexity

- Time: O(log_5 n)
- Space: O(1)

## What Adrian Should Remember

For factorial zeroes, count fives, not the factorial itself.
