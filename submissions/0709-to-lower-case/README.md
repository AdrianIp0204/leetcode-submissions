# To Lower Case

- LeetCode: https://leetcode.com/problems/to-lower-case/
- Language: python3
- Exported at: 2026-06-05T14:10:06.877Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19240000
- Submitted at: 2026-06-03T08:58:08.000Z
- Submission ID: 2021053044

## Pattern

Built-in string normalization.

## Key Idea

The solution uses Python's `lower()` to transform every uppercase character into lowercase. This is exactly what the problem asks for in Python. A manual version would convert ASCII codes, but that is not necessary here.

## Mistake / Edge Case

The result is a new string because Python strings are immutable. Non-letter characters remain unchanged.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

Use language built-ins for direct string normalization unless the task is explicitly about implementing the conversion.
