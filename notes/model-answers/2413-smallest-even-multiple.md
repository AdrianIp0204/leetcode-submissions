# Smallest Even Multiple

- Pattern: parity / least common multiple
- Original attempt: [submissions/2413-smallest-even-multiple](../../submissions/2413-smallest-even-multiple/)

## Model Solution

```cpp
class Solution {
public:
    int smallestEvenMultiple(int n) {
        if (n%2) {
            return 2*n;
        }else{
            return n;
        }
    }
};
```

## Why This Is The Model

The accepted C++ solution checks parity directly and returns the minimal value in each case.

## Invariant or Proof Idea

The returned value is divisible by `n` and `2`, and any smaller positive multiple of `n` would be just `n`, which fails only when `n` is odd.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why is `2 * n` enough for odd `n`?
