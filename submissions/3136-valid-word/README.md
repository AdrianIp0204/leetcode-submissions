# Valid Word

- LeetCode: https://leetcode.com/problems/valid-word/
- Language: python3
- Exported at: 2026-06-08T09:37:46.284Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String
- Memory: 19352000
- Submitted at: 2026-06-08T09:37:40.000Z
- Submission ID: 2026207616

## Pattern

Character validation with required flags.

## Key Idea

Reject words shorter than three characters. Then scan each character, rejecting anything outside digits or English letters while tracking whether at least one vowel and one consonant appear. Digits are allowed but do not satisfy either letter requirement.

## Mistake / Edge Case

A word with only vowels, only consonants, or only digits is not valid even if every character is allowed.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Validation problems often need both invalid-character rejection and positive requirement flags.
