# Minimum Number of Chairs in a Waiting Room

- LeetCode: https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/
- Language: python3
- Exported at: 2026-06-10T12:39:59.588Z
- Submission status seen by extension: Accepted
- Difficulty: Easy
- Tags: String, Simulation
- Runtime: 3
- Memory: 19208000
- Submitted at: 2026-06-10T12:39:56.000Z
- Submission ID: 2028628518

## Pattern

running occupancy maximum.

## Key Idea

Increment current occupancy on entry, decrement on leave, and track the maximum occupancy ever reached.

## Mistake / Edge Case

The answer is the peak simultaneous occupants, not the final number of people in the room.

## Complexity

- Time: O(n)
- Space: O(1)

## What Adrian Should Remember

Minimum capacity for a timeline is the maximum active count over time.
