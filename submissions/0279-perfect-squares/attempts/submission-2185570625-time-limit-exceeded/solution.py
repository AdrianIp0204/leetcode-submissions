class Solution:
    def numSquares(self, n: int) -> int:
        squares = [pow(i, 2) for i in range(round(sqrt(n)))]
        res = 0
        while n > 0:
            if n >= squares[-1]:
                n -= squares[-1]
                res += 1
            else:
                squares.pop()
        return res
