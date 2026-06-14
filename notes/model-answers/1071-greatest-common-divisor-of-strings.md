# Greatest Common Divisor of Strings

- Pattern: string periodicity + gcd length
- Original attempt: [submissions/1071-greatest-common-divisor-of-strings](../../submissions/1071-greatest-common-divisor-of-strings/)

## Model Solution

```python
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""

        def gcd(len1, len2):
            mv = min(len1, len2)
            for i in range(mv, 0, -1):
                if len1 % i == 0 and len2 % i == 0:
                    return i
            return 1

        return str1[:gcd(len(str1), len(str2))]
```

## Why This Is The Model

The accepted solution first proves a shared period can exist, then extracts the prefix whose length divides both strings.

## Invariant or Proof Idea

When the concatenations match, any valid divisor string must be a prefix with length dividing both input lengths.

## Complexity

- Time: O(n + m + min(n, m)) for the accepted divisor scan
- Space: O(n + m) for concatenation checks

## Review Prompt

What does `str1 + str2 == str2 + str1` prove about the two strings?
