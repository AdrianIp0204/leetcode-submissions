# Count Number of Pairs With Absolute Difference K

- LeetCode: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
- Language: python3
- Exported at: 2026-06-13T14:35:29.394Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, Counting
- Runtime: 70
- Memory: 19288000
- Submitted at: 2026-06-13T14:35:26.000Z
- Submission ID: 2031864748

## Pattern

brute-force pair enumeration.

## Key Idea

Check every pair `i < j` and count it when the absolute difference is `k`.

## Mistake / Edge Case

Use `i + 1` for the inner loop so each unordered pair is counted once and an element is never paired with itself.

## Complexity

- Time: O(n^2)
- Space: O(1)

## What Adrian Should Remember

For small pair-count constraints, direct enumeration is fine and often less error-prone.
