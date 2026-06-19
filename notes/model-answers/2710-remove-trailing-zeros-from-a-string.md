# Remove Trailing Zeros From a String

- Pattern: trim suffix
- Original attempt: [submissions/2710-remove-trailing-zeros-from-a-string](../../submissions/2710-remove-trailing-zeros-from-a-string/)

## Model Solution

```python
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        end = len(num)

        while end > 0 and num[end - 1] == "0":
            end -= 1

        return num[:end]
```

## Why This Is The Model

The submitted solution pops trailing zeroes from a list. The model keeps the
same suffix-trimming idea but moves an index left and returns one slice, avoiding
a separate list copy before the trim.

## Invariant

All characters at positions `end` and to the right are trailing zeroes that
should be removed.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why should the scan stop immediately when the first non-zero suffix character is
found?
