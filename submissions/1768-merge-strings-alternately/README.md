# Merge Strings Alternately

- LeetCode: https://leetcode.com/problems/merge-strings-alternately/
- Language: python3
- Exported at: 2026-06-04T07:53:26.332Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T07:53:24.000Z
- Submission ID: 2022047169

## Pattern

Two-string interleaving.

## Key Idea

Zip the shared prefix of both strings and append one character from each. After the shorter word ends, append the leftover suffix from the longer word. The solution uses string concatenation; a list join would be more efficient for larger inputs.

## Mistake / Edge Case

Handle unequal lengths after the zipped portion so no trailing characters are dropped.

## Complexity

- Time: O(n + m)
- Space: O(n + m), for the merged string

## What Adrian Should Remember

For alternating merges, split the problem into shared length plus leftover suffix.
