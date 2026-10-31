class Solution:
    def simplifiedFractions(self, n: int) -> list[str]:
        res = []
        for denominator in range(2, n + 1):
            for numerator in range(1, denominator):
                if gcd(denominator, numerator) == 1:
                    res.append(f'{numerator}/{denominator}')
        return res
