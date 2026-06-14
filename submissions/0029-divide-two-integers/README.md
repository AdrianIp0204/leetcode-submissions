# Divide Two Integers

- LeetCode: https://leetcode.com/problems/divide-two-integers/
- Language: python3
- Exported at: 2026-06-02T11:30:06.944Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-02T09:11:44.000Z
- Submission ID: 2019996372

## Pattern

Bit shifting and repeated subtraction.

## Key Idea

The solution works with absolute values, decides the sign once, and repeatedly subtracts the largest shifted divisor that still fits into the remaining dividend. Each successful subtraction adds the matching power of two to the quotient. This simulates division without using multiplication, division, or modulo.

## Mistake / Edge Case

The special overflow case is `-2^31 / -1`, which must clamp to `2^31 - 1`. The inner shift loop also needs to step back one position after it overshoots.

## Complexity

- Time: O((log n)^2) in this implementation because it rescans shift powers for each subtraction
- Space: O(1)

## What Adrian Should Remember

For integer division without `/`, think "subtract powers of two" instead of subtracting the divisor one copy at a time.
