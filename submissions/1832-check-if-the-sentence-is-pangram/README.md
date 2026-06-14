# Check if the Sentence Is Pangram

- LeetCode: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
- Language: python3
- Exported at: 2026-06-02T11:30:12.168Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-31T06:40:11.000Z
- Submission ID: 2017897843

## Pattern

Seen-letter tracking.

## Key Idea

Build a dictionary of all lowercase letters marked unseen. Scan the sentence and mark each newly seen letter, increasing a count only the first time. The sentence is a pangram once all 26 letters have appeared.

## Mistake / Edge Case

Repeated letters should not increase the count after the first sighting.

## Complexity

- Time: O(n)
- Space: O(1), fixed alphabet size

## What Adrian Should Remember

For alphabet coverage, a set or fixed dictionary makes the invariant explicit.
