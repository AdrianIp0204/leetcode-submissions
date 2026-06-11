class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num == 1:
            return False
        res = 1
        l = int(sqrt(num)) + 1
        for n in range(2, l):
            if num % n == 0:
                if n * n == num:
                    res += n
                else:
                    res += n + num//n
        return True if res == num else False
