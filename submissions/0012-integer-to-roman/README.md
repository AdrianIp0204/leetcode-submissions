# Integer to Roman

- LeetCode: https://leetcode.com/problems/integer-to-roman/
- Language: python3
- Exported at: 2026-06-02T11:30:27.527Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-15T12:10:31.000Z
- Submission ID: 2003775762

## Pattern

Place-value mapping.

## Key Idea

The code treats each decimal digit according to its place: thousands, hundreds, tens, and ones. Special subtractive cases like `4` and `9` have their own table, while the other digits are built from the `1` and `5` symbols for that place. It is accepted, but the indexing is fragile because it depends on the `magic` offset matching the length of the number.

## Mistake / Edge Case

The tricky part is not normal repetition like `III`; it is subtractive forms such as `IV`, `IX`, `XL`, and `CM`. Any place-value solution should make those cases explicit.

## Complexity

- Time: O(d), effectively O(1) because Roman numerals here have bounded length
- Space: O(1) besides the output string

## What Adrian Should Remember

For encoding problems, make the exception cases visible instead of hiding them in nested conditions.
