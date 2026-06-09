class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        n = gcd(a, b)
        if n == 1:
            return 1
        res = 0
        for i in range(1, int(sqrt(n))+ 1):
            if i*i == n:
                res += 1
            elif n%i == 0:
                res += 2
        return res
