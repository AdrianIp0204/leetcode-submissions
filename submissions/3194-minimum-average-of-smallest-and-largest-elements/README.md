# Minimum Average of Smallest and Largest Elements

- LeetCode: https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/
- Language: python3
- Exported at: 2026-06-13T14:49:21.590Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers, Sorting
- Memory: 19504000
- Submitted at: 2026-06-13T14:49:18.000Z
- Submission ID: 2031876228

## Pattern

paired extremes.

## Key Idea

Repeatedly pair the current smallest and largest values, compute their average, and return the minimum average among those pairs.

## Mistake / Edge Case

A sorted two-pointer version is simpler, but the accepted heap version also extracts true extremes each round.

## Complexity

- Time: O(n log n) for the heap approach
- Space: O(n)

## What Adrian Should Remember

When a rule removes smallest and largest together, sort or use two heaps to make extremes explicit.
