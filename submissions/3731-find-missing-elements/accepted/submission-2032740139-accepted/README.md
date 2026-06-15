# Find Missing Elements

- LeetCode: https://leetcode.com/problems/find-missing-elements/
- Language: python3
- Exported at: 2026-06-14T11:10:21.201Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Sorting
- Runtime: 7
- Memory: 19064000
- Submitted at: 2026-06-14T11:10:17.000Z
- Submission ID: 2032740139

## Pattern

Range scan with membership check

## Key Idea

Scan values strictly between the minimum and maximum input values and collect those not present in nums.

## Mistake / Edge Case

TODO

## Complexity

- Time: O(r * n), where r = max(nums) - min(nums)
- Space: O(r) for the answer
