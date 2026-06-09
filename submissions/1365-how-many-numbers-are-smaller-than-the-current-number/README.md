# How Many Numbers Are Smaller Than the Current Number

- LeetCode: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
- Language: python3
- Exported at: 2026-06-07T07:56:19.222Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sorting, Counting Sort
- Runtime: 91
- Memory: 19192000
- Submitted at: 2026-06-07T06:56:33.000Z
- Submission ID: 2025091936

## Pattern

Brute force comparison.

## Key Idea

For each number, compare it with every number in the same array and count how many values are smaller. The solution keeps a running counter for the current element, appends it to the result, then resets before moving on. This is accepted for the easy constraints, but it is not the most scalable version; a sorted copy or counting array would reduce repeated comparisons.

## Mistake / Edge Case

The counter must be reset after each element. Equal values should not be counted as smaller, so the comparison has to be strict.

## Complexity

- Time: O(n^2)
- Space: O(n), for the result list

## What Adrian Should Remember

When a direct nested-loop solution passes, still notice whether sorting or counting would express the pattern better.
