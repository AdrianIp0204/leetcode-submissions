# Nim Game

- LeetCode: https://leetcode.com/problems/nim-game/
- Language: cpp
- Exported at: 2026-06-08T09:14:12.403Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Brainteaser, Game Theory
- Memory: 7856000
- Submitted at: 2026-06-08T09:14:07.000Z
- Submission ID: 2026184483

## Pattern

Game theory modulo rule.

## Key Idea

With one to three stones removable per turn, every multiple of four is losing if both players play perfectly. From any non-multiple of four, the first player can take enough stones to leave a multiple of four to the opponent. Both preserved Python and C++ variants implement this `n % 4 != 0` rule.

## Mistake / Edge Case

The trap is trying to simulate the game tree. The invariant is simpler: positions divisible by four are losing positions.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For small impartial games, look for losing-position cycles before simulating moves.
