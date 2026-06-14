# Student Attendance Record I

- Pattern: counting + substring check
- Original attempt: [submissions/0551-student-attendance-record-i](../../submissions/0551-student-attendance-record-i/)

## Model Solution

```python
class Solution:
    def checkRecord(self, s: str) -> bool:
        sc = Counter(s)
        return True if sc['A'] < 2 and "LLL" not in s else False
```

## Why This Is The Model

The accepted solution checks the two independent failure conditions directly instead of simulating every day with extra state.

## Invariant or Proof Idea

If `A < 2` and `LLL` is absent, no rule has been violated anywhere in the record.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why is counting all `L` characters not the right late check?
