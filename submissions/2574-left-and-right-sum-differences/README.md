# Left and Right Sum Differences

- LeetCode: https://leetcode.com/problems/left-and-right-sum-differences/
- Language: python3
- Exported at: 2026-06-06T05:34:25.917Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Prefix Sum
- Runtime: 3
- Memory: 19324000
- Submitted at: 2026-06-06T03:33:02.000Z
- Submission ID: 2023780305

## Pattern

Prefix/suffix rolling sums.

## Key Idea

Start with the left sum at zero and the right sum as the total array sum. For each element, remove it from the right side, compare left and right, then add it to the left side. This gives each index's left/right difference in one pass.

## Mistake / Edge Case

Remove the current element from the right sum before computing the difference, because neither side includes the current index.

## Complexity

- Time: O(n)
- Space: O(n), for the result list

## What Adrian Should Remember

For left/right split problems, update the side sums in the order implied by index membership.
