# Add Digits

- LeetCode: https://leetcode.com/problems/add-digits/
- Language: python3
- Exported at: 2026-06-02T11:30:23.634Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-17T10:36:58.000Z
- Submission ID: 2005456632

## Pattern

Digital root math.

## Key Idea

The repeated digit-sum process has a modulo-9 pattern called the digital root. Nonzero multiples of 9 reduce to 9, while other numbers reduce to `num % 9`. The code handles `0` separately because `0 % 9` is also `0`.

## Mistake / Edge Case

The common bug is returning `0` for numbers like `9`, `18`, or `99`; those should reduce to `9`, not `0`.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

When repeated digit sums appear, check the modulo-9 digital-root shortcut.
