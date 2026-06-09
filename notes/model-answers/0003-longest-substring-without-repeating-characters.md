# Longest Substring Without Repeating Characters

- Pattern: sliding window / last seen index
- Original attempt: [submissions/0003-longest-substring-without-repeating-characters](../../submissions/0003-longest-substring-without-repeating-characters/)

## Model Solution

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        best = 0
        last_seen = {}

        for right, ch in enumerate(s):
            if ch in last_seen and last_seen[ch] >= left:
                left = last_seen[ch] + 1

            last_seen[ch] = right
            best = max(best, right - left + 1)

        return best
```

## Why This Is The Model

The accepted attempt restarts from each position and rebuilds a temporary list,
which repeats work. The model answer keeps one window `[left, right]` whose
characters are unique. When a duplicate appears inside the current window, move
`left` just past the earlier copy instead of starting over.

## Invariant

At the end of each loop, the substring `s[left:right + 1]` has no repeated
characters. `last_seen` stores the most recent index of each character seen so
far.

## Complexity

- Time: O(n)
- Space: O(k), where `k` is the number of distinct characters in the window

## Review Prompt

Why do we only move `left` when the previous copy is still inside the current
window?
