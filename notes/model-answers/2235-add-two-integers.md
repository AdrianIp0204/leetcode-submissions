# Add Two Integers

- Pattern: direct arithmetic
- Original attempt: [submissions/2235-add-two-integers](../../submissions/2235-add-two-integers/)

## Model Solution

```cpp
class Solution {
public:
    int sum(int num1, int num2) {
        return num1 + num2;
    }
};
```

## Why This Is The Model

The task is only to return the sum of the two parameters. The clearest solution
keeps the method signature expected by LeetCode and returns the arithmetic
expression directly.

## Invariant

The returned value is always the arithmetic sum of the two input integers and
does not depend on any mutable state.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

For signature-focused problems, what is the main thing to verify before
submitting?
