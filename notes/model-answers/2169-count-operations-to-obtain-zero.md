# Count Operations to Obtain Zero

- Pattern: Euclidean subtraction compression
- Original attempt: [submissions/2169-count-operations-to-obtain-zero](../../submissions/2169-count-operations-to-obtain-zero/)

## Model Solution

```python
class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        operations = 0

        while num1 and num2:
            if num1 < num2:
                num1, num2 = num2, num1

            operations += num1 // num2
            num1 %= num2

        return operations
```

## Why This Is The Model

One operation subtracts the smaller number from the larger number. If the larger
number contains the smaller number many times, integer division counts all of
those repeated subtractions at once and the remainder becomes the next state.
That is Euclid's algorithm with the quotient added to the answer.

## Invariant

Each loop iteration accounts for exactly the operations needed to reduce the
larger value below the smaller value, while preserving the same final zero state
as one-by-one subtraction.

## Complexity

- Time: O(log max(num1, num2))
- Space: O(1)

## Review Prompt

Why is `num1 // num2` the number of consecutive legal subtractions before the
roles of the two numbers can change?
