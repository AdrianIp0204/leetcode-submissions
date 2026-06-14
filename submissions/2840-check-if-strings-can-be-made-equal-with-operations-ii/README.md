# Check if Strings Can be Made Equal With Operations II

- LeetCode: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/
- Language: python3
- Exported at: 2026-06-07T07:56:29.820Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String, Sorting
- Runtime: 83
- Memory: 20724000
- Submitted at: 2026-06-06T08:10:35.000Z
- Submission ID: 2024010036

## Pattern

Parity-position multiset comparison.

## Key Idea

The allowed operations can reorder characters within even positions and within odd positions separately. So the strings are transformable exactly when their sorted even-index characters match and their sorted odd-index characters match. The code checks those two multisets directly.

## Mistake / Edge Case

Even and odd positions cannot mix, so comparing the full sorted strings would be too weak.

## Complexity

- Time: O(n log n)
- Space: O(n)

## What Adrian Should Remember

When swaps preserve a class of positions, compare the contents inside each class.
