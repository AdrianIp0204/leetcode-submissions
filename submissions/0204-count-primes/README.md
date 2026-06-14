# Count Primes

- LeetCode: https://leetcode.com/problems/count-primes/
- Language: python3
- Exported at: 2026-06-02T11:30:14.114Z
- Submission status seen by extension: Accepted
- Submitted at: 2026-05-30T11:35:53.000Z
- Submission ID: 2017201523

## Pattern

Sieve of Eratosthenes.

## Key Idea

The solution keeps a boolean array where `pr[i]` means "`i` is still considered prime." Starting from each prime `p`, it marks multiples from `p * p` upward as composite, because smaller multiples were already handled by smaller primes. The final count is the number of still-true entries below `n`.

## Mistake / Edge Case

The problem asks for primes strictly less than `n`, so `n = 2` returns `0`. Starting the crossing-out loop at `p * p` is the main efficiency trick.

## Complexity

- Time: O(n log log n)
- Space: O(n)

## What Adrian Should Remember

For "count primes below n", sieve once; do not test every number independently.
