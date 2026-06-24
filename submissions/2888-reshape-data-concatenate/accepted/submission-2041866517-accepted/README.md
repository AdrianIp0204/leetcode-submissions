# Reshape Data: Concatenate

- LeetCode: https://leetcode.com/problems/reshape-data-concatenate/
- Language: txt
- Exported at: 2026-06-22T08:06:59.578Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Runtime: 310
- Memory: 66620000
- Submitted at: 2026-06-22T08:06:56.000Z
- Submission ID: 2041866517

## Pattern

Dataframe concatenation

## Key Idea

Use `pd.concat` to stack the rows of `df2` after the rows of `df1`.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: this is vertical concatenation, not a key-based merge.

## Complexity

- Time: O(n + m)
- Space: O(n + m)
