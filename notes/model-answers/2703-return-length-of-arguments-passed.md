# Return Length of Arguments Passed

- Pattern: rest parameter length
- Original attempt: [submissions/2703-return-length-of-arguments-passed](../../submissions/2703-return-length-of-arguments-passed/)

## Model Solution

```typescript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};
```

## Why This Is The Model

The rest parameter collects all passed values into one array, so no value inspection or manual counting is needed.

## Invariant or Proof Idea

For any call, `args` contains exactly one element for each supplied argument in original order; therefore its length is the requested count.

## Complexity

- Time: O(1) to read the length
- Space: O(n) for the rest parameter array

## Review Prompt

Why should nested arrays or objects still count as one argument each?
