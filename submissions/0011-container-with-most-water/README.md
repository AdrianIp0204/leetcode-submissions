# Container With Most Water

- LeetCode: https://leetcode.com/problems/container-with-most-water/
- Language: python3
- Exported at: 2026-06-07T07:56:32.044Z
- Submission status seen by extension: Accepted
- Difficulty: Medium
- Tags: Array, Two Pointers, Greedy
- Runtime: 58
- Memory: 29580000
- Submitted at: 2026-06-06T06:21:45.000Z
- Submission ID: 2023913506

## Pattern

Two pointers / greedy.

## Key Idea

Start with the widest possible container and move the pointer at the shorter line. The width always shrinks, so the only chance to improve the area is to find a taller limiting side. Moving the taller side cannot help while the shorter side still caps the height.

## Mistake / Edge Case

Equal heights can move either side; the proof still works because the current height limit is being discarded. Keep the area update before moving a pointer so the current pair is counted.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

For two-pointer greedy problems, know why one pointer is safe to move; here the shorter line is the limiting factor.
