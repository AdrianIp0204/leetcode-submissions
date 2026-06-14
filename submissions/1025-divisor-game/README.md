# Divisor Game

- LeetCode: https://leetcode.com/problems/divisor-game/
- Language: python3
- Exported at: 2026-06-13T02:47:19.157Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Dynamic Programming, Brainteaser, Game Theory
- Memory: 19324000
- Submitted at: 2026-06-13T02:47:13.000Z
- Submission ID: 2031293322

## Pattern

game theory parity.

## Key Idea

Alice wins exactly when `n` is even. She can move to an odd number; Bob from odd must move to even, so parity controls the game.

## Mistake / Edge Case

`n = 1` is losing because there is no legal positive divisor less than `n`.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Some games collapse to winning/losing parity after checking small states.
