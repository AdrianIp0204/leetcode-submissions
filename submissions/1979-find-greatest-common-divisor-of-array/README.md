# Find Greatest Common Divisor of Array

- LeetCode: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
- Language: python3
- Exported at: 2026-06-12T09:12:19.060Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math, Number Theory
- Memory: 19316000
- Submitted at: 2026-06-12T09:12:17.000Z
- Submission ID: 2030626816

## Pattern

min/max gcd.

## Key Idea

The gcd of the array's smallest and largest values is all the problem asks for. Scan downward from the smaller value until both divide evenly.

## Mistake / Edge Case

The answer can be the minimum itself when the maximum is a multiple of it.

## Complexity

- Time: O(min(nums)) in the accepted scan
- Space: O(1)

## What Adrian Should Remember

Read the exact prompt: here the gcd is only for min and max, not for every array element.
