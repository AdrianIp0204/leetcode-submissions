# Top K Frequent Words

- LeetCode: https://leetcode.com/problems/top-k-frequent-words/
- Language: python3
- Exported at: 2026-06-09T04:47:50.358Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting
- Memory: 19556000
- Submitted at: 2026-06-09T04:47:45.000Z
- Submission ID: 2027031536

## Pattern

Frequency map plus custom sort.

## Key Idea

The solution counts each word, then sorts the `(word, count)` pairs by descending count and ascending word. That matches the problem's tie-break rule exactly. After sorting, it returns the first `k` words from the ordered list.

## Mistake / Edge Case

The tie-breaker is lexicographic order, not original appearance order. The sort key `(-count, word)` is the important detail.

## Complexity

- Time: O(n + u log u), where `u` is the number of unique words
- Space: O(u)

## What Adrian Should Remember

For "top k" with a tie-breaker, write the sort key before coding the rest.
