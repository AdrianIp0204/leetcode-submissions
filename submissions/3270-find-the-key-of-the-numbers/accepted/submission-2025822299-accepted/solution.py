class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        res = 0
        c = 1
        for _ in range(4):
            d = min(num1 % 10, num2 % 10, num3 % 10)
            res += d * c
            num1 //= 10
            num2 //= 10
            num3 //= 10
            c *= 10
        return res
