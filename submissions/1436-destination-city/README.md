# Destination City

- LeetCode: https://leetcode.com/problems/destination-city/
- Language: python3
- Exported at: 2026-06-11T01:19:01.220Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String
- Memory: 19228000
- Submitted at: 2026-06-11T01:18:55.000Z
- Submission ID: 2029155264

## Pattern

set difference.

## Key Idea

Origins have outgoing paths; destinations have incoming paths. The final city is the destination that never appears as an origin.

## Mistake / Edge Case

Use sets because city names can be compared by membership, and the route guarantees one final destination.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Terminal nodes in a path often appear in one endpoint set but not the other.
