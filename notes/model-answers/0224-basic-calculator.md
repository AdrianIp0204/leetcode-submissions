# Basic Calculator

- Pattern: stack of signs for parenthesized expressions
- Original attempts: [submissions/0224-basic-calculator](../../submissions/0224-basic-calculator/)

## Model Solution

```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        res = 0
        sign = 1
        num = 0

        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch in "+-":
                res += sign * num
                num = 0
                sign = 1 if ch == "+" else -1
            elif ch == "(":
                stack.append((res, sign))
                res = 0
                sign = 1
            elif ch == ")":
                res += sign * num
                num = 0
                prev_res, prev_sign = stack.pop()
                res = prev_res + prev_sign * res

        return res + sign * num
```

## Why This Is The Model

The recovered submissions for this folder are failed attempts. The model stack solution keeps evaluation state explicit, handles nesting naturally, and avoids mutation/index drift while scanning.

## Invariant or Proof Idea

At any scan position, `res` is the value of the current parenthesis level excluding the number being built, and the stack stores complete outer contexts waiting for a closing parenthesis.

## Complexity

- Time: O(n)
- Space: O(n) for nested parentheses

## Review Prompt

When a `(` starts, what two pieces of outer state must be saved before evaluating the inner expression?
