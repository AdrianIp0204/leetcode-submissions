# String to Integer (atoi)

- LeetCode: https://leetcode.com/problems/string-to-integer-atoi/
- Language: python3
- Exported at: 2026-06-29T08:51:52.713Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: String
- Memory: 19412000
- Submitted at: 2026-06-29T08:51:48.000Z
- Submission ID: 2049826742

## Pattern

string parsing / bounded integer simulation

## Key Idea

Trim leading spaces, read one optional sign, accumulate consecutive digits, and clamp the final value to the signed 32-bit range.

## Mistake / Edge Case

Handles empty trimmed input, non-digit termination, optional `+` or `-`, and overflow clamps.

## Complexity

- Time: O(n)
- Space: O(1)
