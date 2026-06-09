# Set Mismatch

- LeetCode: https://leetcode.com/problems/set-mismatch/
- Language: python3
- Exported at: 2026-06-07T07:56:19.696Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Bit Manipulation, Sorting
- Runtime: 19
- Memory: 20492000
- Submitted at: 2026-06-07T06:42:11.000Z
- Submission ID: 2025079449

## Pattern

Frequency map over expected range.

## Key Idea

The solution builds a count map for every expected number from `1` to `n`, then increments counts from the array. A count of `2` identifies the duplicated number, and a count of `0` identifies the missing number. The result is returned as `[duplicate, missing]`.

## Mistake / Edge Case

The output order matters: duplicate first, missing second. The map must include the whole expected range so the missing value can be detected even though it never appears in `nums`.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For mismatch problems, count both what appeared too many times and what never appeared.
