# Valid Parentheses

- LeetCode: https://leetcode.com/problems/valid-parentheses/
- Language: python3
- Exported at: 2026-06-02T11:30:25.069Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-17T09:53:56.000Z
- Submission ID: 2005428375

## Key Idea

This accepted solution tries to reason from recorded bracket positions and adjacent bracket relationships. It shows the right instinct that bracket type and order both matter, but the implementation is brittle: it uses several lists of positions, debug printing, and even a hard-coded special case. The clean pattern is a stack: push opening brackets, and every closing bracket must match the most recent opening bracket.

## Mistake / Edge Case

The difficult cases are nested or crossing brackets such as `([)]`. Counting opens and closes is not enough; the most recent unmatched opening bracket is what matters.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

If the problem is about nested structure, think "stack" before building position arrays.
