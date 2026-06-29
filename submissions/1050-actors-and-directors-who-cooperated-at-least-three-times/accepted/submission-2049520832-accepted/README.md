# Actors and Directors Who Cooperated At Least Three Times

- LeetCode: https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/
- Language: txt
- Exported at: 2026-06-29T04:07:58.546Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 272
- Memory: 67520000
- Submitted at: 2026-06-29T04:07:52.000Z
- Submission ID: 2049520832

## Pattern

group by aggregate / filter

## Key Idea

Group rows by `(actor_id, director_id)`, count the rows in each group, keep groups with count at least three, and return only the id columns.

## Mistake / Edge Case

The submitted pandas solution uses the grouped `timestamp` count as the cooperation frequency.

## Complexity

- Time: O(n) expected for grouping
- Space: O(k), where `k` is the number of distinct actor/director pairs
