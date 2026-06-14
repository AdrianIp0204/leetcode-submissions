# Create Hello World Function

- Pattern: function factory
- Original attempt: [submissions/2667-create-hello-world-function](../../submissions/2667-create-hello-world-function/)

## Model Solution

```typescript
function createHelloWorld() {
    return function(...args): string {
        return "Hello World"
    };
};
```

## Why This Is The Model

The accepted solution returns a function whose output is fixed, regardless of the arguments supplied later.

## Invariant or Proof Idea

Every invocation of the returned function follows the same return path and does not read `args`.

## Complexity

- Time: O(1) per call
- Space: O(1)

## Review Prompt

Why should extra arguments be accepted but ignored?
