# Sort the People

- Pattern: sort paired data by key
- Original attempt: [submissions/2418-sort-the-people](../../submissions/2418-sort-the-people/)

## Model Solution

```python
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        sap = {h:n for h, n in zip(heights, names)}
        sort = dict(sorted(sap.items(), reverse=True))
        return [n for n in sort.values()]
```

## Why This Is The Model

The accepted solution maps heights to names and sorts by descending height, matching the requested ordering.

## Invariant or Proof Idea

After sorting, every earlier height is greater than every later height, so the extracted names are in the correct order.

## Complexity

- Time: O(n log n)
- Space: O(n)

## Review Prompt

Why would duplicate heights make a plain dictionary risky?
