# Find Numbers with Even Number of Digits

- LeetCode: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
- Language: python3
- Exported at: 2026-06-08T04:31:23.824Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19380000
- Submitted at: 2026-06-07T09:57:19.000Z
- Submission ID: 2025230204

## Pattern

String digit counting.

## Key Idea

The solution converts each number to a string and checks whether the string length is even. Every number with an even digit count increments the answer. This is simple and readable; an arithmetic version would repeatedly divide by ten to count digits.

## Mistake / Edge Case

The check is about digit count, not whether the number itself is even. String conversion makes that distinction clear.

## Complexity

- Time: O(total digits)
- Space: O(d) per converted number

## What Adrian Should Remember

If the property is about the written digits, string conversion is often acceptable for simple constraints.
