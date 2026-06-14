# Arithmetic Slices

- LeetCode: https://leetcode.com/problems/arithmetic-slices/
- Language: python3
- Exported at: 2026-06-07T07:56:26.387Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Dynamic Programming, Sliding Window
- Memory: 19376000
- Submitted at: 2026-06-07T02:02:04.000Z
- Submission ID: 2024825072

## Pattern

Dynamic programming / run length.

## Key Idea

Track the current difference and how many arithmetic slices can be extended inside the current run. When the next difference matches, every previous extendable slice gains one more element and a new length-3 slice appears, so `comb` contributes to the answer and then grows. When the difference changes, the run resets.

## Mistake / Edge Case

Arrays shorter than 3 cannot contain an arithmetic slice. This solution scans by popping from the end, so it mutates `nums`; the same idea can be written with indices if the original list should remain unchanged.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For "count subarrays in a continuing run", store how many valid pieces end at the current position, not every subarray itself.
