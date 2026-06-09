# Defanging an IP Address

- LeetCode: https://leetcode.com/problems/defanging-an-ip-address/
- Language: python3
- Exported at: 2026-06-04T06:16:39.210Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T06:16:37.000Z
- Submission ID: 2021951642

## Pattern

String replacement.

## Key Idea

The solution replaces every dot with `[.]`, which is exactly the required defanging transformation. Python's `replace` handles all occurrences in one call. There is no need to parse the IP address numerically.

## Mistake / Edge Case

Only literal dots should change; digits stay untouched. The output is a new string because strings are immutable.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When a problem is a literal text transformation, do the literal replacement and avoid over-parsing.
