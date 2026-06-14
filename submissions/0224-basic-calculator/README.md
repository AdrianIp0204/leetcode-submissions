# Basic Calculator

- LeetCode: https://leetcode.com/problems/basic-calculator/
- Language: python3
- Exported at: 2026-06-14T00:41:57.972Z
- Submission status seen by extension: Runtime Error
- Difficulty: Hard
- Tags: Math, String, Stack, Recursion
- Runtime: 41
- Memory: 19588000
- Submitted at: 2026-05-16T09:41:55.000Z
- Submission ID: 2004469927

Note: this recovered folder currently has failed attempts only; no accepted bundle was present to promote as the root solution.

## Pattern

stack of signs for parenthesized expressions.

## Key Idea

Scan once, building multi-digit numbers. Keep the current result and sign; when entering parentheses, push the outer result and sign, reset the inner expression, and fold it back when `)` appears.

## Mistake / Edge Case

Trying to rewrite signs inside parentheses is brittle. Nested parentheses and multi-digit numbers are safer when handled as expression state on a stack.

## Complexity

- Time: O(n)
- Space: O(n) for nested parentheses

## What Adrian Should Remember

For calculators with parentheses, push the surrounding context instead of editing the string.
