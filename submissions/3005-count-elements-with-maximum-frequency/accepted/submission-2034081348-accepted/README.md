# Count Elements With Maximum Frequency

- LeetCode: https://leetcode.com/problems/count-elements-with-maximum-frequency/
- Language: python3
- Exported at: 2026-06-15T15:09:27.186Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Counting
- Memory: 19484000
- Submitted at: 2026-06-15T15:09:25.000Z
- Submission ID: 2034081348

## Pattern

Frequency counting

## Key Idea

Count frequencies, find the maximum frequency, then sum the frequencies of values that reach that maximum.

## Mistake / Edge Case

Return the total number of elements with maximum frequency, not the number of distinct values with that frequency.

## Complexity

- Time: O(n)
- Space: O(k)
