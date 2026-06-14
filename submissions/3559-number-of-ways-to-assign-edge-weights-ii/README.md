# Number of Ways to Assign Edge Weights II

- LeetCode: https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii/
- Language: python3
- Exported at: 2026-06-12T04:42:20.455Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Array, Math, Dynamic Programming, Bit Manipulation, Tree, Depth-First Search
- Runtime: 1195
- Memory: 81492000
- Submitted at: 2026-06-12T04:42:14.000Z
- Submission ID: 2030358779

## Pattern

tree distance with binary lifting + parity count.

## Key Idea

Precompute depths and binary-lifting parents so each query can find the LCA and path length. For nonzero distance `d`, half of the `2^d` assignments have odd sum, so the answer is `2^(d - 1)`.

## Mistake / Edge Case

When both query nodes are the same, distance is zero and there is no way to get an odd path sum, so the answer is zero.

## Complexity

- Time: O((n log n) + q log n)
- Space: O(n log n)

## What Adrian Should Remember

Tree path queries often become `depth[a] + depth[b] - 2 * depth[lca]` after LCA preprocessing.
