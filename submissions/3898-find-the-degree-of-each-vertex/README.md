# Find the Degree of Each Vertex

- LeetCode: https://leetcode.com/problems/find-the-degree-of-each-vertex/
- Language: python3
- Exported at: 2026-06-13T10:07:55.907Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Graph Theory, Matrix
- Runtime: 4
- Memory: 19968000
- Submitted at: 2026-06-13T10:07:55.000Z
- Submission ID: 2031647279

## Pattern

adjacency matrix row sums.

## Key Idea

In an adjacency matrix, the degree of vertex `i` is the sum of row `i`.

## Mistake / Edge Case

This assumes the matrix entries are numeric edge indicators, so summing a row counts incident edges.

## Complexity

- Time: O(n^2)
- Space: O(n) for the result

## What Adrian Should Remember

For adjacency matrices, row sums are degree counts.
