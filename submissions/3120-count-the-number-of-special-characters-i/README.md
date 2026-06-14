# Count the Number of Special Characters I

- LeetCode: https://leetcode.com/problems/count-the-number-of-special-characters-i/
- Language: python3
- Exported at: 2026-06-08T09:26:14.043Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String
- Memory: 19312000
- Submitted at: 2026-06-08T09:26:08.000Z
- Submission ID: 2026196377

## Pattern

Set membership with case pairing.

## Key Idea

Build the set of unique characters, then scan lowercase letters and check whether their uppercase counterpart also appears. Each lowercase letter contributes at most once because the set removes duplicates. Sorting is not required for correctness, but it makes the scan deterministic.

## Mistake / Edge Case

Count letters, not occurrences, so duplicates should not inflate the answer.

## Complexity

- Time: O(n log n), because the set is sorted
- Space: O(n)

## What Adrian Should Remember

For paired-case questions, a set lets you ask whether both forms exist.
