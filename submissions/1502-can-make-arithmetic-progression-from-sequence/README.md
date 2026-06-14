# Can Make Arithmetic Progression From Sequence

- LeetCode: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
- Language: python3
- Exported at: 2026-06-02T11:30:20.953Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-29T09:45:59.000Z
- Submission ID: 2016296214

## Pattern

Sort then adjacent-difference check.

## Key Idea

If the array can be rearranged into an arithmetic progression, the sorted order must have one constant adjacent difference. The solution sorts the array, stores the final adjacent difference, and checks every neighboring pair against it. There is an unreachable debug print after the return, which is harmless but should be removed in a polish pass.

## Mistake / Edge Case

All adjacent gaps must match, including negative or zero differences after sorting.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## What Adrian Should Remember

For rearrangement questions, sorting often turns a global condition into adjacent checks.
