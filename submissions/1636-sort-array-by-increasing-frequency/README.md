# Sort Array by Increasing Frequency

- LeetCode: https://leetcode.com/problems/sort-array-by-increasing-frequency/
- Language: python3
- Exported at: 2026-06-13T10:45:35.175Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sorting
- Runtime: 3
- Memory: 19424000
- Submitted at: 2026-06-13T10:45:31.000Z
- Submission ID: 2031680636

## Pattern

frequency map + custom sort.

## Key Idea

Count each number, sort numbers by increasing frequency and, for ties, decreasing numeric value, then expand each number by its count.

## Mistake / Edge Case

The tie-breaker is descending value, so the sort key uses `-value` for the second component.

## Complexity

- Time: O(n + u log u)
- Space: O(u + n) for counts and output

## What Adrian Should Remember

When sorting by a rule, make the tuple key mirror the rule exactly.
