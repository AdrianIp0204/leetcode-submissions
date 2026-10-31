class Solution:
    def simplifiedFractions(self, n: int) -> list[str]:
        return [f'{n}/{d}' for d in range(2, n + 1) for n in range(1, d) if gcd(d, n) == 1]
