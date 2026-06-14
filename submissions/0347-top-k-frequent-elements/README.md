# Top K Frequent Elements

- LeetCode: https://leetcode.com/problems/top-k-frequent-elements/
- Language: python3
- Exported at: 2026-06-08T07:16:14.851Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
- Runtime: 4
- Memory: 22952000
- Submitted at: 2026-06-08T07:16:10.000Z
- Submission ID: 2026077453

## Pattern

Hash map counting plus sorting.

## Key Idea

Count how many times each value appears, sort the `(value, count)` pairs by frequency, then take the first `k` values. This is simple and accepted, especially when the number of unique values is not huge. The more pattern-heavy variants are bucket sort, heap, or quickselect.

## Mistake / Edge Case

The solution assumes `k` is valid, so there are at least `k` unique keys. Sorting the whole dictionary is more work than necessary if only the top few elements are needed.

## Complexity

- Time: O(n + u log u), where `u` is the number of unique values
- Space: O(u)

## What Adrian Should Remember

For top-k frequency problems, first build the counts; then choose sorting, heap, or buckets based on the required complexity.
