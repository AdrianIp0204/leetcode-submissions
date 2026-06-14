# Maximum Equal Frequency

- LeetCode: https://leetcode.com/problems/maximum-equal-frequency/
- Language: python3
- Exported at: 2026-06-07T07:56:28.234Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Array, Hash Table
- Runtime: 157
- Memory: 33732000
- Submitted at: 2026-06-06T11:36:52.000Z
- Submission ID: 2024175822

## Pattern

Frequency of frequencies.

## Key Idea

Maintain two maps: `count[x]` is the current frequency of a value, and `freq_count[f]` is how many values currently have frequency `f`. After each prefix, check whether removing one element can make all remaining frequencies equal. The valid cases are all values appearing once, one singleton plus the rest at `max_freq`, or one value at `max_freq` plus the rest at `max_freq - 1`.

## Mistake / Edge Case

The conditions are easy to get off by one because `i` is the prefix length, not a zero-based index. Updating `freq_count[old_freq]` before increasing the value's frequency is essential; otherwise stale frequencies remain in the state.

## Complexity

- Time: O(n)
- Space: O(u), where `u` is the number of distinct values

## What Adrian Should Remember

When equalizing counts after one deletion, track the distribution of counts themselves, not just each value's count.
