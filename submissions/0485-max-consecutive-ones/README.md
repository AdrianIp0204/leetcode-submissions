# Max Consecutive Ones

- LeetCode: https://leetcode.com/problems/max-consecutive-ones/
- Language: python3
- Exported at: 2026-06-07T06:30:27.674Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Runtime: 15
- Memory: 21684000
- Submitted at: 2026-06-07T06:28:53.000Z
- Submission ID: 2025067927

## Pattern

Run-length counting.

## Key Idea

The code pops values from the end of the list while counting the current run of ones. When it sees a zero, it compares the run length with the best length so far and resets the counter. The final return handles the case where the longest run reaches the beginning of the original list.

## Mistake / Edge Case

This solution destroys the input list with `pop`, which LeetCode allows here but is not ideal for general use. A forward scan would keep the same invariant without mutation.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For consecutive-run problems, keep a current streak and a best streak.
