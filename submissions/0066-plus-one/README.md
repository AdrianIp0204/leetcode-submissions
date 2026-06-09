# Plus One

- LeetCode: https://leetcode.com/problems/plus-one/
- Language: python3
- Exported at: 2026-06-08T04:31:17.695Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Array, Math
- Memory: 19220000
- Submitted at: 2026-06-08T04:04:54.000Z
- Submission ID: 2025886346

## Pattern

Carry propagation.

## Key Idea

The solution adds one to the last digit and carries through the remaining digits from right to left. It builds the result in reverse order, appending `0` while the carry continues and appending `1` at the end if every digit was a `9`. Reversing at the end restores normal digit order.

## Mistake / Edge Case

The all-nines case, such as `[9, 9]`, needs a new leading `1`. This code also mutates the input list with `pop`, which is accepted here but worth noticing.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For digit-array arithmetic, write the carry rule first and then handle the leftover carry after the loop.
