# Count Largest Group

- LeetCode: https://leetcode.com/problems/count-largest-group/
- Language: python3
- Exported at: 2026-06-15T11:36:42.927Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, Math, Counting
- Runtime: 23
- Memory: 19396000
- Submitted at: 2026-06-15T11:36:42.000Z
- Submission ID: 2033881334

## Pattern

Digit-sum counting

## Key Idea

Group numbers by digit sum, track the largest group size, then count how many groups reach that size.

## Mistake / Edge Case

Mutating the loop value while computing its digit sum is safe here because the original value is not needed later in the iteration.

## Complexity

- Time: O(n log n)
- Space: O(log n)
