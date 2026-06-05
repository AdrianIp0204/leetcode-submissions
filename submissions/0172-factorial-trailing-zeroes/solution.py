import math
class Solution:
    def trailingZeroes(self, n: int) -> int:
        c = 0
        while n > 0:
            n = n//5
            c += n
        return c
