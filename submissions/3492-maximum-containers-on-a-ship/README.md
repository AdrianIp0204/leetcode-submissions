# Maximum Containers on a Ship

- LeetCode: https://leetcode.com/problems/maximum-containers-on-a-ship/
- Language: python3
- Exported at: 2026-06-05T14:10:06.056Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 19252000
- Submitted at: 2026-06-03T09:23:13.000Z
- Submission ID: 2021075757

## Pattern

Capacity minimum.

## Key Idea

The ship has `n * n` slots and a weight limit. If one container is too heavy, no container can be loaded. Otherwise, the answer is the smaller of slot capacity and weight capacity; the code expresses that with checks and integer division.

## Mistake / Edge Case

When `n^2 * w` exactly equals `maxWeight`, all slots can be used; a `<=` check would be slightly clearer than the current branch plus division fallback.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Capacity problems often reduce to the minimum of count capacity and weight capacity.
