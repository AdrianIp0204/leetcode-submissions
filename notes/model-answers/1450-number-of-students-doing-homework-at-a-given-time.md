# Number of Students Doing Homework at a Given Time

- Pattern: interval containment count
- Original attempt: [submissions/1450-number-of-students-doing-homework-at-a-given-time](../../submissions/1450-number-of-students-doing-homework-at-a-given-time/)

## Model Solution

```python
class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        count = 0

        for start, end in zip(startTime, endTime):
            if start <= queryTime <= end:
                count += 1

        return count
```

## Why This Is The Model

Each student's homework interval is independent, so the answer is just the
number of intervals containing `queryTime`. The inequality is inclusive on both
ends, matching the problem statement's start and finish times.

## Invariant

After each interval is checked, `count` equals the number of processed students
whose homework time contains `queryTime`.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why should a student whose `endTime` equals `queryTime` be counted?
