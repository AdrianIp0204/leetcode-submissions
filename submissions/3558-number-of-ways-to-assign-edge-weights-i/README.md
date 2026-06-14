# Number of Ways to Assign Edge Weights I

- LeetCode: https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i/
- Language: python3
- Exported at: 2026-06-11T07:44:33.365Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math, Tree, Depth-First Search
- Runtime: 490
- Memory: 69124000
- Submitted at: 2026-06-11T07:44:28.000Z
- Submission ID: 2029462885

## Pattern

tree BFS depth + parity count.

## Key Idea

Find the maximum depth from node 1. Along a path of length `d`, the number of edge-weight assignments with odd sum is `2^(d - 1)` for `d > 0`.

## Mistake / Edge Case

Depth is measured in edges, so the root starts at depth zero and the deepest node's depth is the path length.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For binary choices with odd parity, exactly half of all assignments work once there is at least one edge.
