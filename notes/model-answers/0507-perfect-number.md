# Perfect Number

- Pattern: factor pairs up to square root
- Original attempt: [submissions/0507-perfect-number](../../submissions/0507-perfect-number/)

## Model Solution

```typescript
function checkPerfectNumber(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    let res = 1;
    const l = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= l; i++) {
        if (num % i === 0) {
            res += i;
            if (i !== num / i) {
                res += num / i;
            }
        }
    }
    return res === num;
}
```

## Why This Is The Model

The accepted TypeScript solution keeps the factor-pair invariant explicit and avoids scanning all numbers below `num`.

## Invariant or Proof Idea

After checking `i`, every discovered divisor pair with smaller factor up to `i` has contributed exactly its proper divisors to `res`.

## Complexity

- Time: O(sqrt(n))
- Space: O(1)

## Review Prompt

Why do we add `num / i` when `i` divides `num`?
