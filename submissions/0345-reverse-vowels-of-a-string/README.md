# Reverse Vowels of a String

- LeetCode: https://leetcode.com/problems/reverse-vowels-of-a-string/
- Language: python3
- Exported at: 2026-06-11T07:04:51.441Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Two Pointers, String
- Runtime: 8
- Memory: 20580000
- Submitted at: 2026-06-11T07:04:45.000Z
- Submission ID: 2029425213

## Pattern

two pointers / selective reversal.

## Key Idea

Keep non-vowels in place and fill each vowel position from the next vowel found from the right side.

## Mistake / Edge Case

Use a vowel set containing both lowercase and uppercase vowels; consonants and other characters should not move.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

When only some characters move, scan one side for output positions and another side for matching movable characters.
