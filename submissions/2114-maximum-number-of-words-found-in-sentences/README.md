# Maximum Number of Words Found in Sentences

- LeetCode: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
- Language: python3
- Exported at: 2026-06-02T11:30:12.984Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T03:45:04.000Z
- Submission ID: 2017763806

## Pattern

String split maximum.

## Key Idea

Each sentence's word count is one plus its spaces, or simply the length after splitting by spaces. The solution tracks the largest split length seen. Starting from one works because each sentence has at least one word.

## Mistake / Edge Case

A sentence with no spaces still has one word.

## Complexity

- Time: O(total characters)
- Space: O(w), for each split result

## What Adrian Should Remember

For simple sentence counts, splitting is acceptable, but counting spaces can be even lighter.
