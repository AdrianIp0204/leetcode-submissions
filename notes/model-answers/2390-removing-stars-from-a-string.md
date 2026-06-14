# Removing Stars From a String

- Pattern: stack simulation
- Original attempt: [submissions/2390-removing-stars-from-a-string](../../submissions/2390-removing-stars-from-a-string/)

## Model Solution

```python
class Solution:
    def removeStars(self, s: str) -> str:
        res = []
        for i in s:
            if i == "*":
                res.pop()
            else:
                res.append(i)
        return "".join(res)
```

## Why This Is The Model

The accepted solution models the deletion process exactly and builds the final string from surviving stack contents.

## Invariant or Proof Idea

After processing a prefix, `res` is exactly what remains from that prefix after applying all stars inside it.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does a list work better than repeated string deletion here?
