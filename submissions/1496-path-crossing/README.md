# Path Crossing

- LeetCode: https://leetcode.com/problems/path-crossing/
- Language: python3
- Exported at: 2026-06-11T02:50:54.174Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Memory: 19332000
- Submitted at: 2026-06-11T02:50:48.000Z
- Submission ID: 2029190461

## Pattern

coordinate simulation + visited set.

## Key Idea

Start at `(0, 0)`, update coordinates for each move, and return true if a coordinate is visited twice.

## Mistake / Edge Case

The origin counts as already visited before the first move; returning to it is a crossing.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Path-crossing problems are usually visited-coordinate set problems.
