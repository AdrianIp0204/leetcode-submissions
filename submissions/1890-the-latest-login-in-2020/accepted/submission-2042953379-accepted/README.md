# The Latest Login in 2020

- LeetCode: https://leetcode.com/problems/the-latest-login-in-2020/
- Language: txt
- Exported at: 2026-06-23T05:57:58.408Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: Database
- Runtime: 344
- Memory: 68428000
- Submitted at: 2026-06-23T05:57:56.000Z
- Submission ID: 2042953379

## Pattern

Date filter then grouped maximum

## Key Idea

Filter logins to timestamps in 2020, group by `user_id`, and take each user's maximum timestamp.

## Mistake / Edge Case

No subjective mistake recorded. Edge case: users with no 2020 login do not appear after the filter.

## Complexity

- Time: O(n) expected
- Space: O(n)
