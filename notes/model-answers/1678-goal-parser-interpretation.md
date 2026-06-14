# Goal Parser Interpretation

- Pattern: literal string replacement
- Original attempt: [submissions/1678-goal-parser-interpretation](../../submissions/1678-goal-parser-interpretation/)

## Model Solution

```python
class Solution:
    def interpret(self, command: str) -> str:
        return command.replace("(al)", "al").replace("()","o")
```

## Why This Is The Model

The accepted solution maps the grammar tokens directly without unnecessary character-by-character state.

## Invariant or Proof Idea

After both replacements, every command token has been transformed into its output text exactly once.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does this problem not need a stack or recursive parser?
