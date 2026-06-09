# Most Common Word

- LeetCode: https://leetcode.com/problems/most-common-word/
- Language: python3
- Exported at: 2026-06-09T01:16:52.116Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Hash Table, String, Counting
- Memory: 19324000
- Submitted at: 2026-06-09T01:16:47.000Z
- Submission ID: 2026898548

## Pattern

Normalize text, filter, then count.

## Key Idea

The solution lowercases the paragraph, replaces non-lowercase-letter characters with spaces, splits into words, and counts only words not in the banned set. While counting, it keeps the best word seen so far. This avoids a second pass over the count map.

## Mistake / Edge Case

Punctuation and case must be removed before counting, otherwise `"Ball"` and `"ball,"` would look like different words. The banned list should be a set for fast lookup, which this solution does.

## Complexity

- Time: O(n), where `n` is the paragraph length
- Space: O(n)

## What Adrian Should Remember

For text-counting problems, normalize first; counting dirty tokens usually creates fake edge cases.
