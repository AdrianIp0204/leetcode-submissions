# Smallest Even Multiple

- LeetCode: https://leetcode.com/problems/smallest-even-multiple/
- Language: cpp
- Exported at: 2026-06-12T08:48:50.430Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Number Theory
- Memory: 7948000
- Submitted at: 2026-06-12T08:48:46.000Z
- Submission ID: 2030603894

## Pattern

parity / least common multiple.

## Key Idea

The smallest positive number divisible by both `n` and `2` is `n` if `n` is already even, otherwise `2n`.

## Mistake / Edge Case

Odd numbers need one factor of 2 added; even numbers already contain it.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

LCM with 2 only depends on parity.
