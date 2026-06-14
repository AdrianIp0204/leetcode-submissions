# Three Consecutive Odds

- LeetCode: https://leetcode.com/problems/three-consecutive-odds/
- Language: python3
- Exported at: 2026-06-05T01:58:04.898Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-05T01:57:58.000Z
- Submission ID: 2022778788

## Pattern

Fixed-size sliding window.

## Key Idea

Check each length-three window and return true as soon as all three numbers are odd. Because the window size is fixed and tiny, direct index checks are clear enough. If no window passes, return false.

## Mistake / Edge Case

Stop at `len(arr) - 2` so the lookahead indices stay in range.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For short consecutive-pattern checks, a small window is often cleaner than maintaining extra state.
