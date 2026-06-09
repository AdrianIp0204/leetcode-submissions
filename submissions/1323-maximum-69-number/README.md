# Maximum 69 Number

- LeetCode: https://leetcode.com/problems/maximum-69-number/
- Language: python3
- Exported at: 2026-06-05T14:09:59.094Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, Greedy
- Memory: 19304000
- Submitted at: 2026-06-03T12:37:10.000Z
- Submission ID: 2021238670

## Pattern

Greedy leftmost replacement.

## Key Idea

To maximize the number, the best single change is turning the leftmost `6` into a `9`, because earlier digits have larger place value. The code converts to a string, replaces the first `6` only, and converts back to an integer. If there is no `6`, the number is already maximal.

## Mistake / Edge Case

Replacing every `6` would violate the "at most one digit" rule. Replacing a later `6` while an earlier one exists gives a smaller result.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(d)

## What Adrian Should Remember

For maximizing a number with one digit change, spend the change at the highest place value that improves the digit.
