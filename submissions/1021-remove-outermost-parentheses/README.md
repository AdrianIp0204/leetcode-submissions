# Remove Outermost Parentheses

- LeetCode: https://leetcode.com/problems/remove-outermost-parentheses/
- Language: python3
- Exported at: 2026-06-04T06:13:34.264Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-04T06:13:30.000Z
- Submission ID: 2021947957

## Pattern

Parentheses depth tracking.

## Key Idea

The solution keeps a depth counter called `opened`. It appends an opening parenthesis only when it is not the outermost one, and appends a closing parenthesis only when it is not closing the outermost layer. Updating the depth after those checks removes exactly the primitive outer shells.

## Mistake / Edge Case

The order of "append or not" versus "change depth" is the whole trick. For `(` you check before increasing; for `)` you check before decreasing while depth still includes the current closing pair.

## Complexity

- Time: O(n)
- Space: O(n)

## What Adrian Should Remember

For parentheses stripping, track depth and decide whether each character belongs to depth greater than one.
