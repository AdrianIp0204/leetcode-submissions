# Add Two Numbers

- LeetCode: https://leetcode.com/problems/add-two-numbers/
- Language: python3
- Exported at: 2026-06-02T11:30:11.105Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T08:56:43.000Z
- Submission ID: 2018001430

## Pattern

Linked list digit arithmetic.

## Key Idea

This accepted solution converts each reversed linked list into a Python integer, adds the integers, then builds the output linked list from the reversed digit string. That is a useful baseline because it matches the way the digits are stored, but it leans on Python's arbitrary-size integers instead of practicing the core linked-list/carry pattern. The stronger general solution walks both lists together with a carry and appends one output node per digit.

## Mistake / Edge Case

The carry after the final pair of digits is the easy thing to forget in the digit-by-digit version. This version also assumes the input lists are non-empty before reading `out[0]`, which is true for LeetCode but worth noticing.

## Complexity

- Time: O(n + m)
- Space: O(n + m), not counting the returned linked list

## What Adrian Should Remember

For linked-list number problems, prefer the carry loop first; converting to a whole integer may pass in Python but does not teach the transferable pattern.
