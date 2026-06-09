# Ugly Number

- LeetCode: https://leetcode.com/problems/ugly-number/
- Language: python3
- Exported at: 2026-06-02T11:30:19.138Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-29T10:39:14.000Z
- Submission ID: 2016338132

## Pattern

Repeated factor removal.

## Key Idea

An ugly number has no prime factors except `2`, `3`, and `5`. The solution repeatedly divides by those factors whenever possible; if it reaches `1`, all factors were allowed. If a remaining value is not divisible by any of the three, it has another prime factor and should return `False`.

## Mistake / Edge Case

Non-positive numbers are not ugly. The code uses `/`, which turns values into floats; integer division with `//` would be cleaner even though this still passes here.

## Complexity

- Time: O(log n)
- Space: O(1)

## What Adrian Should Remember

For factor-whitelist problems, keep dividing out allowed factors until the number stops changing or becomes 1.
