# Maximum Total Subarray Value II

- LeetCode: https://leetcode.com/problems/maximum-total-subarray-value-ii/
- Language: python3
- Exported at: 2026-06-10T11:29:21.925Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Array, Greedy, Segment Tree, Heap (Priority Queue)
- Runtime: 3437
- Memory: 52196000
- Submitted at: 2026-06-10T11:29:13.000Z
- Submission ID: 2028570300

## Pattern

range max-min sparse table + best-first heap.

## Key Idea

A subarray's value is max minus min. A sparse table answers that range value quickly, and a max-heap starts with each left index's longest range, then shortens the right endpoint after taking a candidate.

## Mistake / Edge Case

The heap stores negative values because Python's heap is a min-heap; each popped range must push its next shorter candidate if one exists.

## Complexity

- Time: O(n log n + k log n)
- Space: O(n log n)

## What Adrian Should Remember

For top-k range values, combine fast range queries with a heap that lazily expands the next candidate from each sequence.
