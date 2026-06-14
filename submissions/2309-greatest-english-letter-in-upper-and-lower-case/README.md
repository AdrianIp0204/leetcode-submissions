# Greatest English Letter in Upper and Lower Case

- LeetCode: https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
- Language: python3
- Exported at: 2026-06-12T10:33:15.261Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Enumeration
- Runtime: 3
- Memory: 19180000
- Submitted at: 2026-06-12T10:33:11.000Z
- Submission ID: 2030707024

## Pattern

set membership + max character.

## Key Idea

Collect lowercase letters, then for each one check whether its uppercase version exists. Track the largest uppercase code.

## Mistake / Edge Case

Return an empty string when no letter appears in both cases.

## Complexity

- Time: O(n) average membership plus up to 26 candidates
- Space: O(n) for the set

## What Adrian Should Remember

Case-pair problems become membership checks after normalizing one side.
