# Sum of All Odd Length Subarrays

- LeetCode: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
- Language: python3
- Exported at: 2026-06-05T14:09:52.437Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math, Prefix Sum
- Runtime: 60
- Memory: 19400000
- Submitted at: 2026-06-04T07:41:03.000Z
- Submission ID: 2022037517

## Pattern

Brute force odd-length subarray enumeration.

## Key Idea

Start with the sum of all length-one subarrays, then enumerate longer odd lengths and add each covered element. The nested loops effectively add every odd-length window to the answer. This passes, but the contribution-counting formula would be a stronger solution because each element's number of odd-length appearances can be counted directly.

## Mistake / Edge Case

Only odd lengths should be included. The special return for arrays of length one or two avoids unnecessary loops.

## Complexity

- Time: O(n^3)
- Space: O(1)

## What Adrian Should Remember

When a brute force subarray sum works, ask whether each element's contribution can be counted instead.
