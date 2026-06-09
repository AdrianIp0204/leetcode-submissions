# Uncommon Words from Two Sentences

- LeetCode: https://leetcode.com/problems/uncommon-words-from-two-sentences/
- Language: python3
- Exported at: 2026-06-09T03:51:18.942Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Counting
- Memory: 19232000
- Submitted at: 2026-06-09T03:51:15.000Z
- Submission ID: 2026977902

## Pattern

Combined frequency count.

## Key Idea

The solution joins the word lists from both sentences, counts every word with `Counter`, then returns words whose total count is exactly one. This matches the definition of uncommon: the word appears once across both sentences combined. The local archive needs `Counter` imported from `collections` to run standalone.

## Mistake / Edge Case

A word that appears once in each sentence has total count two, so it is not uncommon. Counting the combined stream avoids handling the two sentences separately.

## Complexity

- Time: O(n + m), where `n` and `m` are the number of words in each sentence
- Space: O(n + m)

## What Adrian Should Remember

When the definition depends on total appearances across inputs, combine first and count once.
