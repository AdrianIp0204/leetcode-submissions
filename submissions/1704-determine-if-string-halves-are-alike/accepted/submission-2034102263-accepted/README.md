# Determine if String Halves Are Alike

- LeetCode: https://leetcode.com/problems/determine-if-string-halves-are-alike/
- Language: python3
- Exported at: 2026-06-15T15:28:42.971Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Counting
- Runtime: 3
- Memory: 19116000
- Submitted at: 2026-06-15T15:28:40.000Z
- Submission ID: 2034102263

## Pattern

Counting with balance

## Key Idea

Add one for each vowel in the first half and subtract one for each vowel in the second half; the halves match when the balance is zero.

## Mistake / Edge Case

Include uppercase vowels in the lookup set.

## Complexity

- Time: O(n)
- Space: O(1)
