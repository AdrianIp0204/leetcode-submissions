# Find Words Containing Character

- LeetCode: https://leetcode.com/problems/find-words-containing-character/
- Language: python3
- Exported at: 2026-06-02T13:56:28.361Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Filtered index list.

## Key Idea

Enumerate the words and keep indices whose word contains the target character. The list comprehension preserves input order naturally. The README status is a legacy unknown capture, but the local solution is straightforward.

## Mistake / Edge Case

Return indices, not the words themselves.

## Complexity

- Time: O(total characters scanned)
- Space: O(k), for matching indices

## What Adrian Should Remember

When the answer is positions, use `enumerate` so the index stays attached to the value.
