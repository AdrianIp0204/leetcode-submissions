# Self Dividing Numbers

- LeetCode: https://leetcode.com/problems/self-dividing-numbers/
- Language: python3
- Exported at: 2026-06-02T11:30:18.107Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-29T14:26:30.000Z
- Submission ID: 2016499232

## Pattern

Digit scan.

## Key Idea

The solution checks each number in the interval by converting it to digits. If any digit is `0`, the number cannot be self-dividing. Otherwise every digit must divide the original number evenly; if all digits pass, the number is appended to the output.

## Mistake / Edge Case

Zero digits are the important trap because division by zero is invalid and any number containing `0` is not self-dividing.

## Complexity

- Time: O((right - left + 1) * d), where `d` is the digit count
- Space: O(d)

## What Adrian Should Remember

For digit-property checks, keep the original number available while inspecting each digit.
