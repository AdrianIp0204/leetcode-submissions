# Regular Expression Matching

- LeetCode: https://leetcode.com/problems/regular-expression-matching/
- Language: python3
- Exported at: 2026-06-29T09:09:12.267Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: String, Dynamic Programming, Recursion
- Runtime: 263
- Memory: 19372000
- Submitted at: 2026-06-29T09:09:05.000Z
- Submission ID: 2049845567

## Pattern

regular expression full match

## Key Idea

Use Python's regex engine with `re.fullmatch` so the whole input string must match the pattern.

## Mistake / Edge Case

The submitted code delegates `.` and `*` semantics to `re`; a model interview answer should usually spell out the DP state.

## Complexity

- Time: Delegated to Python's regex engine
- Space: Delegated to Python's regex engine
