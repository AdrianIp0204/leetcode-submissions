# Count the Number of Special Characters II

- LeetCode: https://leetcode.com/problems/count-the-number-of-special-characters-ii/
- Language: python3
- Exported at: 2026-06-12T10:16:41.395Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String
- Runtime: 138
- Memory: 21760000
- Submitted at: 2026-06-12T10:16:36.000Z
- Submission ID: 2030691182

## Pattern

ordered case tracking.

## Key Idea

A letter is special only if lowercase appears before uppercase, and no lowercase appears after it has become special. Track seen characters and remove letters invalidated by late lowercase repeats.

## Mistake / Edge Case

Order matters in version II; simply checking both cases exist would overcount letters whose lowercase appears after uppercase.

## Complexity

- Time: O(n)
- Space: O(1), bounded by alphabet size

## What Adrian Should Remember

When a condition includes ordering, maintain state transitions, not just final membership.
