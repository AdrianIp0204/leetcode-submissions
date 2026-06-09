# Fizz Buzz

- LeetCode: https://leetcode.com/problems/fizz-buzz/
- Language: python3
- Exported at: 2026-06-08T08:49:23.866Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String, Simulation
- Runtime: 3
- Memory: 19568000
- Submitted at: 2026-06-08T08:49:20.000Z
- Submission ID: 2026160782

## Pattern

Simulation with divisibility checks.

## Key Idea

The solution loops from `1` to `n` and appends the correct string for each number. It checks divisibility by both `3` and `5` before checking either one alone, so multiples of `15` become `"FizzBuzz"`. Everything else is converted to a normal number string.

## Mistake / Edge Case

Condition order matters. If the code checks `i % 3 == 0` first, multiples of `15` would stop at `"Fizz"` and never become `"FizzBuzz"`.

## Complexity

- Time: O(n)
- Space: O(n) for the output

## What Adrian Should Remember

When conditions overlap, test the most specific combined case first.
