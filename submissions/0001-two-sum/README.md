# Two Sum

- LeetCode: https://leetcode.com/problems/two-sum/
- Language: python3
- Exported at: 2026-06-02T11:30:30.188Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-15T07:40:49.000Z
- Submission ID: 2003606753

## Key Idea

This accepted solution is the early brute-force version: try pairs of indices until two values add to the target. It works for the accepted test, but it does repeated work by checking both `(i, j)` and `(j, i)` and it keeps scanning even after the inner loop breaks. The stronger pattern is a hash map from value to index, which turns "find the other number" into a lookup.

## Mistake / Edge Case

The code depends on `a` and `b` being assigned before returning; LeetCode guarantees one answer, but in normal code this would be fragile. The use of `&` also works here only because both sides are booleans; `and` is the clearer Python operator.

## Complexity

- Time: O(n^2)
- Space: O(1)

## What Adrian Should Remember

When a problem asks for two values that combine to a target, first ask whether storing the complement in a hash map avoids a nested loop.
