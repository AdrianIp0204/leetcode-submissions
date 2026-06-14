# Minimum Cuts to Divide a Circle

- LeetCode: https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
- Language: python3
- Exported at: 2026-06-12T11:10:47.246Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Geometry
- Memory: 19160000
- Submitted at: 2026-06-12T11:10:43.000Z
- Submission ID: 2030738394

## Pattern

geometry case analysis.

## Key Idea

One slice needs zero cuts. For even `n`, `n / 2` diameters make `n` pieces; for odd `n`, each cut can add only one needed radial division, so `n` cuts are required.

## Mistake / Edge Case

`n = 1` is the special no-cut case.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Circle cutting changes when pieces can be paired by diameters; parity matters.
