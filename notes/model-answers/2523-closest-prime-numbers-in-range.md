# Closest Prime Numbers in Range

- Pattern: sieve plus adjacent prime scan
- Original attempt: [submissions/2523-closest-prime-numbers-in-range](../../submissions/2523-closest-prime-numbers-in-range/)

## Model Solution

```python
class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        is_prime = [True] * (right + 1)
        if right >= 0:
            is_prime[0] = False
        if right >= 1:
            is_prime[1] = False

        for value in range(2, isqrt(right) + 1):
            if is_prime[value]:
                for multiple in range(value * value, right + 1, value):
                    is_prime[multiple] = False

        previous = None
        best = [-1, -1]
        best_gap = float("inf")

        for value in range(max(2, left), right + 1):
            if not is_prime[value]:
                continue

            if previous is not None and value - previous < best_gap:
                best = [previous, value]
                best_gap = value - previous
                if best_gap <= 2:
                    break

            previous = value

        return best
```

## Why This Is The Model

A sieve marks primality for the whole range limit once, avoiding repeated trial
division for many candidates. After that, the closest pair must be adjacent in
the ordered list of primes, so a single scan from `left` to `right` is enough to
compare neighboring primes.

## Invariant

During the final scan, `previous` is the nearest prime before the current value,
and `best` is the smallest adjacent-prime gap seen so far inside the range.

## Complexity

- Time: O(right log log right + right - left)
- Space: O(right)

## Review Prompt

Why is it sufficient to compare only adjacent primes rather than every pair of
primes in the interval?
