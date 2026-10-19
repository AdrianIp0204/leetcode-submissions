class Solution:
    def largestEven(self, s: str) -> str:
        n = int(s)
        while (n % 10) % 2:
            n //= 10
        return '' if n == 0 else str(n)
