# Power of Four

- LeetCode: https://leetcode.com/problems/power-of-four/
- Language: python3
- Exported at: 2026-06-08T06:58:14.302Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Bit Manipulation, Recursion
- Runtime: 2
- Memory: 19400000
- Submitted at: 2026-06-08T06:58:11.000Z
- Submission ID: 2026059881

## Pattern

Logarithm check baseline.

## Key Idea

The solution checks whether `log(n, 4)` is an integer after rejecting non-positive numbers. This is concise and accepted, but it relies on floating-point behavior and the archive would need `log` imported to run standalone. A more robust integer pattern is to check that `n` is a power of two and its set bit is in a power-of-four position.

## Mistake / Edge Case

`n <= 0` must return `False`; logarithms are not defined for those values. Floating precision is the subtle risk with log-based power checks.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

For power checks, logarithms are quick, but integer division or bit tests are usually safer.
