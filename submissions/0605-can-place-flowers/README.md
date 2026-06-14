# Can Place Flowers

- LeetCode: https://leetcode.com/problems/can-place-flowers/
- Language: python3
- Exported at: 2026-06-12T07:24:12.078Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Greedy
- Runtime: 4
- Memory: 19736000
- Submitted at: 2026-06-12T07:24:06.000Z
- Submission ID: 2030531684

## Pattern

greedy gap counting.

## Key Idea

Count zero runs between planted flowers. Edge gaps allow one flower per two zeros, while middle gaps need one buffer zero on each side, giving `(gap - 1) // 2` placements.

## Mistake / Edge Case

An all-zero bed is a special edge gap on both sides, so it can place `(len + 1) // 2` flowers.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For spacing problems, count empty gaps and treat edge gaps differently from middle gaps.
