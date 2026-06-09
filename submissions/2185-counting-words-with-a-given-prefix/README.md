# Counting Words With a Given Prefix

- LeetCode: https://leetcode.com/problems/counting-words-with-a-given-prefix/
- Language: python3
- Exported at: 2026-06-04T08:27:16.664Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T08:27:15.000Z
- Submission ID: 2022074824

## Pattern

Prefix comparison.

## Key Idea

The goal is to count words whose first characters match `pref`. The solution first checks whether `pref` appears anywhere, then compares characters from the start; this works for normal constraints but is more complicated than `word.startswith(pref)`. The important invariant is that every prefix character must match at the same position.

## Mistake / Edge Case

Substring presence is not enough; the match must begin at index zero.

## Complexity

- Time: O(total prefix characters checked)
- Space: O(1)

## What Adrian Should Remember

Use prefix-specific checks when the position matters; substring checks can distract from the condition.
