# Baseball Game

- LeetCode: https://leetcode.com/problems/baseball-game/
- Language: python3
- Exported at: 2026-06-08T04:32:03.759Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Stack, Simulation
- Runtime: 57
- Memory: 19700000
- Submitted at: 2026-06-05T04:33:39.000Z
- Submission ID: 2022864242

## Pattern

Stack simulation.

## Key Idea

The list `n` acts as a stack of valid round scores. A number pushes a new score, `C` removes the previous valid score, `D` pushes double the previous score, and `+` pushes the sum of the previous two scores. Summing the stack at the end gives the total.

## Mistake / Edge Case

The operation order matters because later operations refer only to still-valid previous scores. The submitted code still has `print(n)`, which is harmless for acceptance but should be removed in polished code.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When operations undo or reuse recent values, a stack is usually the clean model.
