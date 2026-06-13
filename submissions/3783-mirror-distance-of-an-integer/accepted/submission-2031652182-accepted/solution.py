class Solution:
    def mirrorDistance(self, n: int) -> int:
        m, r = n, 0
        while n:
            r = r*10 + n%10
            n //= 10
        return abs(m-r)
