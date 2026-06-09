# Intersection of Two Arrays

- LeetCode: https://leetcode.com/problems/intersection-of-two-arrays/
- Language: python3
- Exported at: 2026-06-09T06:09:42.302Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Two Pointers, Binary Search, Sorting
- Memory: 19316000
- Submitted at: 2026-06-09T06:09:38.000Z
- Submission ID: 2027125388

## Pattern

Set intersection.

## Key Idea

The solution converts both arrays into sets and uses `&` to keep only values present in both. This naturally removes duplicates, which matches the problem's output requirement. The final list order is not guaranteed, but LeetCode accepts any order for this problem.

## Mistake / Edge Case

If the problem required duplicate counts, this set approach would be wrong. Here it is correct because each intersection value should appear once.

## Complexity

- Time: O(n + m)
- Space: O(n + m)

## What Adrian Should Remember

When duplicates do not matter, sets usually make membership and intersection problems direct.
