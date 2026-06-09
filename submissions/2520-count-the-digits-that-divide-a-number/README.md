# Count the Digits That Divide a Number

- LeetCode: https://leetcode.com/problems/count-the-digits-that-divide-a-number/
- Language: python3
- Exported at: 2026-06-02T11:30:11.655Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T07:23:18.000Z
- Submission ID: 2017933328

## Pattern

Digit frequency and divisibility.

## Key Idea

Convert the number into digits, then check each distinct digit to see whether it divides the original number. If a digit divides, add its frequency in the number. This avoids rechecking duplicate digits while still counting all occurrences.

## Mistake / Edge Case

The LeetCode constraints avoid zero digits for this problem; otherwise division by zero would need explicit handling.

## Complexity

- Time: O(d^2) in this implementation because `count` scans the digit list
- Space: O(d)

## What Adrian Should Remember

When using distinct digits, remember whether the answer counts distinct values or repeated occurrences.
