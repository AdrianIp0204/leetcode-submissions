# Maximum Product of Two Elements in an Array

- LeetCode: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
- Language: python3
- Exported at: 2026-06-05T14:09:47.828Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Sorting, Heap (Priority Queue)
- Memory: 19188000
- Submitted at: 2026-06-04T08:30:43.000Z
- Submission ID: 2022077757

## Pattern

Sort and take top two.

## Key Idea

The maximum product after subtracting one from each selected value comes from the two largest numbers. Sorting puts them at the end, and popping twice retrieves them. This mutates the input array, which is fine for LeetCode here but worth noticing.

## Mistake / Edge Case

Subtract after selecting the two largest values. Sorting ascending means the largest values are at the end.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## What Adrian Should Remember

When only the top two values matter, sorting is simple; a two-max scan is the leaner alternative.
