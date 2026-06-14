# Add to Array-Form of Integer

- LeetCode: https://leetcode.com/problems/add-to-array-form-of-integer/
- Language: python3
- Exported at: 2026-06-13T03:00:01.976Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Runtime: 15
- Memory: 19752000
- Submitted at: 2026-06-13T02:59:57.000Z
- Submission ID: 2031297902

## Pattern

grade-school addition from right to left.

## Key Idea

Treat `k` as the carry plus remaining addend. Walk from the last digit of `num`, add into `k`, append `k % 10`, and divide `k` by 10.

## Mistake / Edge Case

Continue while `k > 0` even after all array digits are consumed, so final carry digits are preserved.

## Complexity

- Time: O(max(n, log k))
- Space: O(max(n, log k)) for the result

## What Adrian Should Remember

Addition problems become simple when `k` carries both the incoming carry and the remaining higher digits.
