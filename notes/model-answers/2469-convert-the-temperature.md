# Convert the Temperature

- Pattern: formula translation
- Original attempt: [submissions/2469-convert-the-temperature](../../submissions/2469-convert-the-temperature/)

## Model Solution

```python
class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        kelvin = celsius + 273.15
        fahrenheit = celsius * 1.80 + 32.00
        return [kelvin, fahrenheit]
```

## Why This Is The Model

The solution is a direct translation of the two conversion formulas. Naming the
intermediate values makes the required output order visible: Kelvin first, then
Fahrenheit.

## Invariant

For the input Celsius value, the returned first element always uses the Kelvin
formula and the second element always uses the Fahrenheit formula.

## Complexity

- Time: O(1)
- Space: O(1)

## Review Prompt

Why can a formula problem still fail even when both formulas are written
correctly?
