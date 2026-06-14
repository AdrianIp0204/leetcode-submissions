# XOR Operation in an Array

- LeetCode: https://leetcode.com/problems/xor-operation-in-an-array/
- Language: python3
- Exported at: 2026-06-02T13:31:07.212Z
- Submission status seen by extension: Unknown (legacy visible-page capture before status fix; verify in LeetCode)

## Pattern

Iterative XOR accumulation.

## Key Idea

Generate exactly `n` terms of the sequence `start + 2 * i` and XOR them into an accumulator. XOR is associative, so one running result is enough. The README status is still a legacy unknown capture, so this note only reflects the local solution shape.

## Mistake / Edge Case

The loop must run exactly `n` times, including the `i = 0` term.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For XOR sequence problems, keep the accumulator simple before looking for bit tricks.
