# Game Play Analysis I

- LeetCode: https://leetcode.com/problems/game-play-analysis-i/
- Language: txt
- Exported at: 2026-06-26T04:27:24.043Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 296
- Memory: 68276000
- Submitted at: 2026-06-26T04:27:23.000Z
- Submission ID: 2046377705

## Pattern

Group by / aggregate minimum

## Key Idea

Group rows by `player_id` and take the minimum `event_date` as each player's
first login date.

## Mistake / Edge Case

The output needs one row per player, so aggregate after grouping instead of
filtering a single global minimum date.

## Complexity

- Time: O(n)
- Space: O(p), where `p` is the number of players
