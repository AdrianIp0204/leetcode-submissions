# Third Maximum Number

- LeetCode: https://leetcode.com/problems/third-maximum-number/
- Language: python3
- Exported at: 2026-06-08T06:12:35.267Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Sorting
- Runtime: 1
- Memory: 20604000
- Submitted at: 2026-06-08T04:53:03.000Z
- Submission ID: 2025928121

## Pattern

Set dedupe plus sorting.

## Key Idea

The code removes duplicate values with a set, sorts the unique values, and returns the third largest if it exists. If there are fewer than three distinct values, it returns the maximum. This is concise and correct, though a one-pass solution could track the top three distinct values without sorting.

## Mistake / Edge Case

The problem asks for the third distinct maximum, not the third element after sorting with duplicates. Inputs like `[2, 2, 3, 1]` need deduplication first.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

When the word "distinct" appears, decide where deduplication happens before ranking values.
