# Jewels and Stones

- LeetCode: https://leetcode.com/problems/jewels-and-stones/
- Language: python3
- Exported at: 2026-06-03T06:41:44.701Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Membership counting.

## Key Idea

The solution scans every stone and increments a counter when that stone character appears in the jewel string. It is correct for the simple problem shape, though converting jewels to a set would make each membership check constant-time. The README status is still legacy `Unknown`, but the solution itself is straightforward.

## Mistake / Edge Case

Uppercase and lowercase letters are different jewels. If `jewels` stays as a string, each `s in jewels` check scans the jewel characters.

## Complexity

- Time: O(len(stones) * len(jewels)) for this version
- Space: O(1)

## What Adrian Should Remember

If repeated membership checks use the same collection, consider turning it into a set.
