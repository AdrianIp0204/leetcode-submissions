# Find the Maximum Achievable Number

- LeetCode: https://leetcode.com/problems/find-the-maximum-achievable-number/
- Language: cpp
- Exported at: 2026-06-05T14:10:02.677Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 9600000
- Submitted at: 2026-06-03T10:59:13.000Z
- Submission ID: 2021161569

## Pattern

Algebraic offset.

## Key Idea

Each operation can move the target and original number toward each other by one, creating a total gap increase of two per operation. After `t` operations, the maximum achievable value is therefore `num + 2 * t`. Both implementations encode this formula directly.

## Mistake / Edge Case

The factor is two because both sides can change across the operation relationship.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For operation-count math problems, derive the per-operation change before simulating.
