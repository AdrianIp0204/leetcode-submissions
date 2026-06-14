# Maximum Total Subarray Value I

- LeetCode: https://leetcode.com/problems/maximum-total-subarray-value-i/
- Language: python3
- Exported at: 2026-06-09T01:25:40.675Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Greedy
- Memory: 26708000
- Submitted at: 2026-06-09T01:25:36.000Z
- Submission ID: 2026901779

## Pattern

Range spread times count.

## Key Idea

The value of any chosen subarray is driven by the difference between a maximum and a minimum. To maximize each choice, use the global maximum minus the global minimum, then repeat that best value `k` times. The formula returns the repeated total directly.

## Mistake / Edge Case

The same best spread can be used for each of the `k` selections under this problem's rules.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

If repeated choices are independent, find the best single choice and multiply.
