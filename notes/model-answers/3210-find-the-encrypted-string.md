# Find the Encrypted String

- Pattern: cyclic string rotation
- Original attempt: [submissions/3210-find-the-encrypted-string](../../submissions/3210-find-the-encrypted-string/)

## Model Solution

```typescript
function getEncryptedString(s: string, k: number): string {
    const l : number = s.length;
    const n : number = k%l;
    return s.slice(n,s.length) + s.slice(0,n)
};
```

## Why This Is The Model

The accepted TypeScript solution performs the rotation with two slices and the modulo-normalized offset.

## Invariant or Proof Idea

Every character at original index `i` moves to encrypted index `(i - k) mod n` under the left rotation.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why does `k % s.length` give the only shift that matters?
