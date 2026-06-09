# Move Zeroes

- LeetCode: https://leetcode.com/problems/move-zeroes/
- Language: python3
- Exported at: 2026-06-08T06:12:35.882Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Two Pointers
- Runtime: 706
- Memory: 20408000
- Submitted at: 2026-06-08T04:46:18.000Z
- Submission ID: 2025921586

## Pattern

In-place mutation baseline; intended pattern is two pointers.

## Key Idea

The code scans values and, whenever it sees `0`, removes one zero from the list and appends a zero at the end. This preserves the nonzero order for the accepted cases, but it is not the clean intended approach. A better in-place solution keeps a write pointer for nonzero values, then fills the rest with zeroes.

## Mistake / Edge Case

Mutating a list while iterating over it is risky because elements can be skipped as indices shift. `remove(0)` is also linear, so this accepted version can become slow.

## Complexity

- Time: O(n^2), because `remove` shifts elements
- Space: O(1)

## What Adrian Should Remember

For in-place array rearrangement, prefer explicit read/write pointers over removing while iterating.
