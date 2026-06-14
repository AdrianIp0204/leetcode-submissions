# Last Stone Weight

- LeetCode: https://leetcode.com/problems/last-stone-weight/
- Language: python3
- Exported at: 2026-06-12T08:37:36.241Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Heap (Priority Queue)
- Runtime: 1
- Memory: 19392000
- Submitted at: 2026-06-12T08:37:32.000Z
- Submission ID: 2030593561

## Pattern

max heap simulation.

## Key Idea

Python has a min heap, so store negative weights. Repeatedly pop the two largest stones and push back the remaining difference if any.

## Mistake / Edge Case

When both stones have the same weight, pushing zero is harmless here because it will not affect the final positive result, but skipping zero is also fine.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

Negating values is the standard Python trick for max-heap behavior.
