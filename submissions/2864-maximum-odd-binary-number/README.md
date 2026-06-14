# Maximum Odd Binary Number

- LeetCode: https://leetcode.com/problems/maximum-odd-binary-number/
- Language: python3
- Exported at: 2026-06-05T14:09:46.704Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Math, String, Greedy
- Runtime: 3
- Memory: 19352000
- Submitted at: 2026-06-04T08:47:49.000Z
- Submission ID: 2022092458

## Pattern

Greedy bit arrangement.

## Key Idea

To make the binary number odd, the last bit must be `1`. To maximize the value, put all remaining `1` bits as far left as possible and fill the middle with zeros. The code counts ones and constructs that layout.

## Mistake / Edge Case

Reserve one `1` for the final odd bit before placing the leading ones.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For binary rearrangement, separate required low-order bits from value-maximizing high-order bits.
