# Valid Anagram

- LeetCode: https://leetcode.com/problems/valid-anagram/
- Language: python3
- Exported at: 2026-06-05T14:09:36.052Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Hash Table, String, Sorting
- Runtime: 16
- Memory: 20288000
- Submitted at: 2026-06-05T13:40:35.000Z
- Submission ID: 2023319476

## Pattern

Sorting / character counting.

## Key Idea

Sort both strings and compare the sorted results. If two strings contain exactly the same characters with the same frequencies, sorting puts them in the same order. This is concise and accepted; a frequency counter is the linear-time alternative.

## Mistake / Edge Case

Strings with different lengths fail automatically after sorting, but checking length first can avoid unnecessary work. For larger alphabets or repeated calls, counting is usually more direct than sorting.

## Complexity

- Time: O(n log n + m log m)
- Space: O(n + m)

## What Adrian Should Remember

Sorting is a clean baseline for anagrams, but character counts are the pattern to reach for when linear time matters.
