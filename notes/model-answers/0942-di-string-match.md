# DI String Match

- Pattern: greedy low/high assignment
- Original attempt: [submissions/0942-di-string-match](../../submissions/0942-di-string-match/)

## Model Solution

```typescript
function diStringMatch(s: string): number[] {
    let upper = s.length;
    let lower = 0;
    let res = [];
    for (const w of s) {
        if (w === "I") {
            res.push(lower);
            lower++;
        } else {
            res.push(upper);
            upper--;
        }
    }
    res.push(upper);
    return res
};
```

## Why This Is The Model

The accepted TypeScript solution keeps a lower and upper boundary and chooses the only extreme that cannot make the current constraint fail.

## Invariant or Proof Idea

After each character, the chosen prefix satisfies all constraints seen so far, and every unused value remains between `lower` and `upper`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does choosing the smallest value for `I` leave the most flexibility?
