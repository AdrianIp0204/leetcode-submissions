# Total Waviness of Numbers in Range I

- LeetCode: https://leetcode.com/problems/total-waviness-of-numbers-in-range-i/
- Language: python3
- Exported at: 2026-06-05T14:09:56.753Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Math, Dynamic Programming, Enumeration
- Runtime: 277
- Memory: 19280000
- Submitted at: 2026-06-04T05:00:01.000Z
- Submission ID: 2021872673

## Pattern

Range brute force with digit triples.

## Key Idea

Scan each number in the range and examine every interior digit. A digit contributes waviness when it is strictly greater than both neighbors or strictly less than both neighbors. This direct enumeration is readable for version I, but it scales poorly for larger ranges.

## Mistake / Edge Case

Only interior digits can be peaks or valleys; first and last digits have missing neighbors.

## Complexity

- Time: O(R * d), where R is the range size and d is digits per number
- Space: O(d), for the string form of each number

## What Adrian Should Remember

For version I constraints, brute force can clarify the property before building digit DP.
