# Find Invalid IP Addresses

- LeetCode: https://leetcode.com/problems/find-invalid-ip-addresses/
- Language: txt
- Exported at: 2026-06-23T06:53:38.026Z
- Submission status seen by extension: Accepted
- Difficulty: Hard
- Tags: Database
- Runtime: 360
- Memory: 67776000
- Submitted at: 2026-06-23T06:53:36.000Z
- Submission ID: 2043027227

## Pattern

String validation and frequency count

## Key Idea

Mark IP strings invalid when the split parts are not four components, a component has a leading zero, or a numeric component exceeds 255; then count and sort invalid IPs.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: leading zeros are invalid even when the numeric value is within range.

## Complexity

- Time: O(n * L + u log u)
- Space: O(n + u)
