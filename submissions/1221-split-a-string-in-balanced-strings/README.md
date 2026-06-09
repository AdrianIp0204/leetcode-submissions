# Split a String in Balanced Strings

- LeetCode: https://leetcode.com/problems/split-a-string-in-balanced-strings/
- Language: python3
- Exported at: 2026-06-05T06:03:30.987Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-05T06:03:30.000Z
- Submission ID: 2022946162

## Pattern

Prefix-balance baseline.

## Key Idea

The code converts `L` to `-1` and `R` to `1`, then counts split points where both the prefix and suffix have sum zero. It starts with the whole string as one balanced segment. This works as a baseline, but the cleaner greedy solution increments a segment count whenever the running balance returns to zero.

## Mistake / Edge Case

The submitted version recomputes slice sums repeatedly, so it does much more work than necessary. A single running balance gives the same split points in one pass.

## Complexity

- Time: O(n^2), because each split recomputes prefix and suffix sums
- Space: O(n)

## What Adrian Should Remember

For balanced-prefix problems, a running balance usually beats repeated slice sums.
