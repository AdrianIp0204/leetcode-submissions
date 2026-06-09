# Count Operations to Obtain Zero

- LeetCode: https://leetcode.com/problems/count-operations-to-obtain-zero/
- Language: python3
- Exported at: 2026-06-06T05:34:26.676Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Simulation
- Memory: 19312000
- Submitted at: 2026-06-06T03:15:32.000Z
- Submission ID: 2023771956

## Pattern

Euclidean subtraction compression.

## Key Idea

Instead of subtracting the smaller number one step at a time, count how many full subtractions fit with integer division. Then keep the remainder and swap the values, just like Euclid's algorithm. This compresses many repeated operations into one loop iteration.

## Mistake / Edge Case

Stop when either number becomes zero; division by zero must never happen.

## Complexity

- Time: O(log max(num1, num2))
- Space: O(1)

## What Adrian Should Remember

Repeated subtraction between two numbers is often Euclid's algorithm hiding in plain sight.
