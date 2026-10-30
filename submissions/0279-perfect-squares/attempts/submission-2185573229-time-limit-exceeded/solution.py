class Solution:
    def numSquares(self, n: int) -> int:
        s = round(sqrt(n))
        if n == pow(s, 2):
            return 1
        squares = [pow(i, 2) for i in range(s)]
        res = 0
        while n > 0:
            if n >= squares[-1]:
                n -= squares[-1]
                res += 1
            else:
                squares.pop()
        return res
