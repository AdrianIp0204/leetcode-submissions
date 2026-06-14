# Sort the People

- LeetCode: https://leetcode.com/problems/sort-the-people/
- Language: python3
- Exported at: 2026-06-13T10:40:00.571Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String, Sorting
- Runtime: 8
- Memory: 19620000
- Submitted at: 2026-06-13T10:39:57.000Z
- Submission ID: 2031675857

## Pattern

sort paired data by key.

## Key Idea

Pair each height with its name, sort heights descending, and return names in that order.

## Mistake / Edge Case

Heights are unique in this problem, so a height-to-name map does not lose entries.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

When sorting one list by another list, zip the two pieces of data before ordering.
