# Score of a String

- LeetCode: https://leetcode.com/problems/score-of-a-string/
- Language: python3
- Exported at: 2026-06-02T13:47:30.985Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Adjacent character differences.

## Key Idea

Walk through each adjacent pair and add the absolute difference between their character codes. The code iterates over all characters except the last, comparing each with the next original character. The README status is a legacy unknown capture, so this note describes the local solution only.

## Mistake / Edge Case

Stop before the final character because it has no next neighbor.

## Complexity

- Time: O(n)
- Space: O(n), due to the sliced prefix string

## What Adrian Should Remember

Adjacent-pair scoring usually needs indices or pairwise iteration with one fewer step than the string length.
