# Mirror Distance of an Integer

- Pattern: digit reversal
- Original attempt: [submissions/3783-mirror-distance-of-an-integer](../../submissions/3783-mirror-distance-of-an-integer/)

## Model Solution

```cpp
class Solution {
public:
    int mirrorDistance(int n) {
        int m = n;
        int r = 0;
        while (n) {
            r = r*10 + n%10;
            n /= 10;
        }
        return abs(m-r);
    }
};
```

## Why This Is The Model

The accepted C++ solution builds the reversed integer with `% 10` and `/ 10`, then compares it to the saved original.

## Invariant or Proof Idea

After each loop, `r` is the reverse of the digits already removed from the right side of `n`.

## Complexity

- Time: O(d), where `d` is the number of digits
- Space: O(1)

## Review Prompt

Why must `m` be saved before the loop?
