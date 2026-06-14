# Permutation Sequence

- LeetCode: https://leetcode.com/problems/permutation-sequence/
- Language: python3
- Exported at: 2026-06-02T11:30:17.594Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-30T03:25:49.000Z
- Submission ID: 2016870769

## Pattern

Brute-force permutation generation.

## Key Idea

The accepted archive generates all permutations of `1..n`, then takes the `(k - 1)`th one and joins its digits. This works only because LeetCode's constraints are small enough for the submitted case, but it is not the intended solution. The stronger approach uses factorial blocks to choose each digit directly without materializing every permutation.

## Mistake / Edge Case

This file depends on `permutations` being available from `itertools`; the local archive does not show that import. The bigger issue is factorial growth: generating all permutations becomes huge very quickly.

## Complexity

- Time: O(n! * n)
- Space: O(n! * n)

## What Adrian Should Remember

When a problem asks for the kth ordering, look for a counting/indexing shortcut before generating all orderings.
