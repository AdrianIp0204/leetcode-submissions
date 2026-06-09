# Sort Characters By Frequency

- LeetCode: https://leetcode.com/problems/sort-characters-by-frequency/
- Language: python3
- Exported at: 2026-06-09T05:58:55.966Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting
- Runtime: 9
- Memory: 21004000
- Submitted at: 2026-06-09T05:58:50.000Z
- Submission ID: 2027111637

## Pattern

Counter frequency ordering.

## Key Idea

The solution uses `Counter(s).most_common()` to get characters sorted by descending frequency, then repeats each character by its count and joins the pieces. This is a compact Python version of counting plus sorting by frequency. The local archive needs `Counter` imported from `collections` to run standalone.

## Mistake / Edge Case

Characters with the same frequency can appear in any order. The important requirement is grouping each character the correct number of times.

## Complexity

- Time: O(n + k log k), where `k` is distinct characters
- Space: O(n + k)

## What Adrian Should Remember

For frequency-sorted output, count first, sort the distinct keys, then expand back to the full string.
