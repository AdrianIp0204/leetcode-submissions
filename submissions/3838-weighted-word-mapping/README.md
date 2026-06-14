# Weighted Word Mapping

- LeetCode: https://leetcode.com/problems/weighted-word-mapping/
- Language: python3
- Exported at: 2026-06-13T04:17:39.313Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, String, Simulation
- Runtime: 4
- Memory: 19388000
- Submitted at: 2026-06-13T04:17:36.000Z
- Submission ID: 2031337641

## Pattern

character weight lookup + modulo mapping.

## Key Idea

Map each lowercase letter to its given weight, sum the weights for a word, reduce modulo 26, and map that value to the required output character.

## Mistake / Edge Case

Build the weight map once so each character lookup is O(1); the modulo keeps the result inside the alphabet.

## Complexity

- Time: O(total characters + 26)
- Space: O(26 + number of words)

## What Adrian Should Remember

For custom alphabet scoring, make the letter-to-weight table explicit before scanning words.
