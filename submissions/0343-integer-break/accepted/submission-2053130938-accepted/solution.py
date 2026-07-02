class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2:
            return 1
        elif n == 3:
            return 2
        m = n//3
        r = n % 3
        if r == 1:
            r = 4
            m -= 1
        elif r == 0:
            r = 1
        return pow(3, m) * r
