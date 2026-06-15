# Count Dominant Indices

- LeetCode: https://leetcode.com/problems/count-dominant-indices/
- Language: python3
- Exported at: 2026-06-15T12:02:15.153Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Enumeration
- Runtime: 7
- Memory: 19336000
- Submitted at: 2026-06-15T12:02:12.000Z
- Submission ID: 2033903646

## Pattern

Prefix/suffix aggregate scan

## Key Idea

Maintain the sum of values to the right and compare each value against the average of that remaining suffix without using division.

## Mistake / Edge Case

The submitted loop checks indices before the final element because it needs a non-empty suffix.

## Complexity

- Time: O(n)
- Space: O(1)
