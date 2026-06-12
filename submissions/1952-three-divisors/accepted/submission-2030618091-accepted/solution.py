class Solution:
    def isThree(self, n: int) -> bool:
        if n < 4:
            return False
        s = sqrt(n)
        if not s.is_integer():
            return False
        for i in range(2, int(s)):
            if n % i == 0:
                return False
        return True
