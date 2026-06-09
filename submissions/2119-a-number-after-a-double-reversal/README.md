# A Number After a Double Reversal

- LeetCode: https://leetcode.com/problems/a-number-after-a-double-reversal/
- Language: python3
- Exported at: 2026-06-08T06:13:36.092Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 19296000
- Submitted at: 2026-06-04T07:59:49.000Z
- Submission ID: 2022052203

## Pattern

Trailing-zero observation.

## Key Idea

Reversing twice preserves the number unless the first reversal drops trailing zeros. The only non-preserved positive numbers are those ending in zero. Zero itself remains zero, so it is a special allowed case.

## Mistake / Edge Case

Do not reject `0`; only nonzero values divisible by 10 fail.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Look for what information an operation destroys; here reversal destroys trailing zeros.
