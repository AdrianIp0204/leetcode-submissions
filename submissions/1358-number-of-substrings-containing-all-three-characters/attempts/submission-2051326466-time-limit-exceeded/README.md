# Number of Substrings Containing All Three Characters

- LeetCode: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
- Language: python3
- Exported at: 2026-06-30T14:41:59.265Z
- Submission status seen by extension: Time Limit Exceeded
- Difficulty: Medium
- Tags: Hash Table, String, Sliding Window
- Runtime: 10731
- Memory: 19268000
- Submitted at: 2026-06-30T14:41:43.000Z
- Submission ID: 2051326466

## Pattern

Brute-force substring scan

## Key Idea

For each starting index, extend the right edge until all three characters have
appeared, then count the valid suffix extensions.

## Mistake / Edge Case

Mechanical issue: repeatedly scanning forward from each start can take
quadratic time on long strings.

## Complexity

- Time: O(n^2) worst case
- Space: O(1)
