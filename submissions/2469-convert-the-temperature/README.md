# Convert the Temperature

- LeetCode: https://leetcode.com/problems/convert-the-temperature/
- Language: cpp
- Exported at: 2026-06-05T14:10:03.189Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math
- Memory: 8268000
- Submitted at: 2026-06-03T10:57:31.000Z
- Submission ID: 2021160234

## Pattern

Formula translation.

## Key Idea

Apply the two required conversion formulas directly: Kelvin is Celsius plus 273.15, and Fahrenheit is Celsius times 1.8 plus 32. Both Python and C++ versions return the two values in the expected order. No iteration is involved.

## Mistake / Edge Case

Return Kelvin first and Fahrenheit second; order matters in the output list.

## Complexity

- Time: O(1)
- Space: O(1)

## What Adrian Should Remember

Formula problems are mostly about exact constants and output ordering.
