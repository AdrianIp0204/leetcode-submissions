# Largest Number At Least Twice of Others

- LeetCode: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
- Language: python3
- Exported at: 2026-06-09T03:09:26.139Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Sorting
- Memory: 19184000
- Submitted at: 2026-06-09T03:09:22.000Z
- Submission ID: 2026949845

## Pattern

Max scan baseline.

## Key Idea

The code finds the maximum value, then checks whether any other value is greater than half of that maximum. If such a value exists, the maximum is not at least twice every other number; otherwise it returns the index of the maximum. This captures the main comparison idea without sorting.

## Mistake / Edge Case

The submitted check is brittle if the maximum appears more than once, because `n != m` skips duplicate maximum values. A more robust version would track the largest and second largest distinct positions or compare every index except the chosen max index.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

When a maximum must dominate every other element, compare against the second largest candidate, not just an arbitrary threshold loop.
