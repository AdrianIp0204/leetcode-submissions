# Permutation Sequence

- Pattern: factorial number system / kth ordering
- Original attempt: [submissions/0060-permutation-sequence](../../submissions/0060-permutation-sequence/)

## Model Solution

```python
from math import factorial


class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        numbers = list(range(1, n + 1))
        k -= 1
        answer = []

        for remaining in range(n, 0, -1):
            block = factorial(remaining - 1)
            index, k = divmod(k, block)
            answer.append(str(numbers.pop(index)))

        return "".join(answer)
```

## Why This Is The Model

The accepted attempt generates every permutation and then indexes into the list.
That hides the real structure: permutations are grouped into factorial-sized
blocks by their first digit, then by their second digit, and so on. The model
answer uses `k` to choose the correct block at each position.

## Invariant

At each step, `k` is the zero-based index within the permutations of the remaining
digits. Dividing by `(remaining - 1)!` chooses the next digit's block, and the
remainder becomes the index inside that block.

## Complexity

- Time: O(n^2), because popping from the middle of a Python list shifts elements
- Space: O(n)

## Review Prompt

Why should `k` be converted to zero-based indexing before the loop?
