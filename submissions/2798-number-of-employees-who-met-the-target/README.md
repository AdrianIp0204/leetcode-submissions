# Number of Employees Who Met the Target

- LeetCode: https://leetcode.com/problems/number-of-employees-who-met-the-target/
- Language: python3
- Exported at: 2026-06-02T11:30:08.073Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-06-02T07:09:24.000Z
- Submission ID: 2019890215

## Pattern

Threshold count.

## Key Idea

Sort hours descending, then count values until the first one below the target. Because of the sorting, the loop can break early. A direct unsorted count would also work and avoid the sorting cost.

## Mistake / Edge Case

Once a descending value is below target, all later values are below target too.

## Complexity

- Time: O(n log n)
- Space: O(1) extra, aside from sort implementation details

## What Adrian Should Remember

Sorting can enable early break, but for simple threshold counts a direct scan is usually cleaner.
