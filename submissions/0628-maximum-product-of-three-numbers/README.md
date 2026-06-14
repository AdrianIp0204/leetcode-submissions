# Maximum Product of Three Numbers

- LeetCode: https://leetcode.com/problems/maximum-product-of-three-numbers/
- Language: python3
- Exported at: 2026-06-09T01:49:15.278Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math, Sorting
- Runtime: 23
- Memory: 20208000
- Submitted at: 2026-06-09T01:49:09.000Z
- Submission ID: 2026910693

## Pattern

Sorting with negative-number case.

## Key Idea

After sorting, the maximum product is either the three largest numbers or the largest number times the two smallest numbers. The second case matters because two negative numbers produce a positive product. Taking the max of those two candidates covers both positive-heavy and negative-heavy inputs.

## Mistake / Edge Case

Do not ignore negative values. `[-10, -10, 5, 2]` is won by the two smallest negatives times the largest positive.

## Complexity

- Time: O(n log n)
- Space: O(1) extra beyond the in-place sort

## What Adrian Should Remember

When products involve signs, the smallest values can be part of the maximum answer.
