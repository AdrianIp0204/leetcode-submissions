# Counter

- Pattern: closure over mutable state
- Original attempt: [submissions/2620-counter](../../submissions/2620-counter/)

## Model Solution

```typescript
function createCounter(n: number): () => number {
    return function() {
        return n++
    }
}
```

## Why This Is The Model

The accepted solution returns a function that closes over `n` and post-increments it on every call.

## Invariant or Proof Idea

The closed-over `n` persists between calls; `n++` returns the current value and then prepares the next value.

## Complexity

- Time: O(1) per call
- Space: O(1)

## Review Prompt

What would change if the function used `++n` instead of `n++`?
