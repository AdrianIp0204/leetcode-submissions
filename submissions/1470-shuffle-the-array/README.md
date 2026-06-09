# Shuffle the Array

- LeetCode: https://leetcode.com/problems/shuffle-the-array/
- Language: python3
- Exported at: 2026-06-07T07:56:20.685Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array
- Runtime: 63
- Memory: 19252000
- Submitted at: 2026-06-07T06:25:33.000Z
- Submission ID: 2025065138

## Pattern

Two-half interleaving.

## Key Idea

The first half contains the x values and the second half contains the y values. Loop through the first half and append `nums[i]` followed by `nums[n + i]`. The Python and C++ versions use the same direct indexing idea.

## Mistake / Edge Case

The second index must be offset by `n`; using `i + 1` or alternating from the raw array would mix positions incorrectly.

## Complexity

- Time: O(n)
- Space: O(n), for the shuffled result

## What Adrian Should Remember

For paired halves, write the index relation explicitly before building the output.
