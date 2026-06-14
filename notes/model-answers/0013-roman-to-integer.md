# Roman to Integer

- Pattern: left-to-right scan / subtractive rule
- Original attempt: [submissions/0013-roman-to-integer](../../submissions/0013-roman-to-integer/)

## Model Solution

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        value = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        total = 0

        for i, ch in enumerate(s):
            if i + 1 < len(s) and value[ch] < value[s[i + 1]]:
                total -= value[ch]
            else:
                total += value[ch]

        return total
```

## Why This Is The Model

The accepted attempt searches for subtractive patterns, removes them, then
counts the remaining characters. The model answer applies the Roman rule
directly: a symbol is subtracted only when it appears before a larger symbol.

That makes the code shorter and avoids mutating the input string while scanning.

## Invariant

At index `i`, the final contribution of `s[i]` is determined by the next symbol:
subtract it if the next symbol is larger, otherwise add it.

## Complexity

- Time: O(n)
- Space: O(1)

## Review Prompt

Why does comparing only with the next symbol catch all valid subtractive cases?
