# Return Length of Arguments Passed

- LeetCode: https://leetcode.com/problems/return-length-of-arguments-passed/
- Language: typescript
- Exported at: 2026-06-14T01:25:25.727Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Runtime: 36
- Memory: 55588000
- Submitted at: 2026-06-14T01:25:22.000Z
- Submission ID: 2032240904

## Pattern

rest parameter length.

## Key Idea

TypeScript gathers every argument into the `args` rest array, so the answer is exactly `args.length`.

## Mistake / Edge Case

The argument values do not matter; `null`, arrays, objects, booleans, numbers, and strings each count as one passed argument.

## Complexity

- Time: O(1) to read the length
- Space: O(n) for the rest parameter array

## What Adrian Should Remember

When a problem asks for argument count, rest parameters already encode the whole operation.
