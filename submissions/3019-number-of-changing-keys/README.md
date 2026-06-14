# Number of Changing Keys

- LeetCode: https://leetcode.com/problems/number-of-changing-keys/
- Language: python3
- Exported at: 2026-06-05T14:09:41.172Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Runtime: 4
- Memory: 19236000
- Submitted at: 2026-06-05T05:15:27.000Z
- Submission ID: 2022901180

## Pattern

Case-normalized adjacent comparison.

## Key Idea

Convert the string to lowercase so uppercase and lowercase versions of the same key are treated equally. Then count adjacent positions where the normalized character changes. The first character starts the sequence and does not count as a change.

## Mistake / Edge Case

Normalize before comparing, otherwise case changes would be counted incorrectly.

## Complexity

- Time: O(n)
- Space: O(n), because lowercasing creates a normalized string

## What Adrian Should Remember

Normalize input first when the problem says two forms should be treated as the same.
