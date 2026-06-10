# Count Primes

- Pattern: Sieve of Eratosthenes
- Original attempt: [submissions/0204-count-primes](../../submissions/0204-count-primes/)

## Model Solution

```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0

        is_prime = [True] * n
        is_prime[0] = is_prime[1] = False

        p = 2
        while p * p < n:
            if is_prime[p]:
                for multiple in range(p * p, n, p):
                    is_prime[multiple] = False
            p += 1

        return sum(is_prime)
```

## Why This Is The Model

The sieve marks each composite from its smallest prime factor instead of checking every
number independently. Starting at `p * p` avoids re-marking smaller multiples that
already had a smaller prime factor.

## Invariant

Before each candidate `p`, every composite below `p * p` has already been marked
`False`.

## Complexity

- Time: O(n log log n)
- Space: O(n)

## Review Prompt

Why is `p * p` the first multiple that still needs to be crossed out?
