# Remove Outermost Parentheses

- Pattern: parentheses depth tracking
- Original attempt: [submissions/1021-remove-outermost-parentheses](../../submissions/1021-remove-outermost-parentheses/)

## Model Solution

```python
class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        answer = []
        depth = 0

        for char in s:
            if char == "(":
                if depth > 0:
                    answer.append(char)
                depth += 1
            else:
                depth -= 1
                if depth > 0:
                    answer.append(char)

        return "".join(answer)
```

## Why This Is The Model

The solution appends only parentheses that belong to depth greater than one. For
an opening parenthesis, that decision is made before increasing depth; for a
closing parenthesis, it is made after decreasing depth.

## Invariant

At each step, `depth` is the nesting depth after all already-processed
characters, and `answer` contains only non-outer parentheses from completed
prefixes.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why are opening and closing parentheses checked on opposite sides of the depth
update?
