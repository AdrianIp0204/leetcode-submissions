# Count Residue Prefixes

- LeetCode: https://leetcode.com/problems/count-residue-prefixes/
- Language: python3
- Exported at: 2026-06-15T11:47:41.393Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Runtime: 1
- Memory: 19304000
- Submitted at: 2026-06-15T11:47:38.000Z
- Submission ID: 2033890729

## Pattern

Prefix scan with distinct-count state

## Key Idea

Track the number of scanned characters and distinct characters in the prefix, then count prefixes where the residue condition matches the distinct count.

## Mistake / Edge Case

Code-supported note: this solution stops once three distinct characters have appeared, matching the submitted logic.

## Complexity

- Time: O(n)
- Space: O(1)
