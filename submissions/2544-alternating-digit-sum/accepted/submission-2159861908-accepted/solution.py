class Solution:
    def alternateDigitSum(self, n: int) -> int:
        plus = True
        res = 0
        for i in str(n):

            if plus:
                res += int(i)
                plus = False
            else:
                res -= int(i)
                plus = True

        return res
