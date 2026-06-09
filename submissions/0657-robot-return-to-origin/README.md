# Robot Return to Origin

- LeetCode: https://leetcode.com/problems/robot-return-to-origin/
- Language: python3
- Exported at: 2026-06-05T14:09:52.949Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Simulation
- Runtime: 23
- Memory: 19148000
- Submitted at: 2026-06-04T07:09:22.000Z
- Submission ID: 2022009278

## Pattern

Coordinate simulation.

## Key Idea

The solution treats the robot's position as a complex number: horizontal moves change the real part and vertical moves change the imaginary part. After applying every move, the robot returns to origin exactly when the final position is `0`. This is a compact way to store two coordinates in one value.

## Mistake / Edge Case

Every move must have an equal opposite move overall; order does not matter for this problem. The `else` branch assumes any non-`R/L/U` move is `D`, which is fine under LeetCode's valid-input constraint.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For grid movement, track net displacement instead of storing the whole path unless the path itself matters.
