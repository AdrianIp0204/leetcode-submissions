from collections import deque
class Solution:
    def repeatedStringMatch(self, a: str, b: str, x: int, y: int) -> bool:
        nb, na = len(b), len(a)
        lb, la = nb*y, na*x

        if lb > la:
            return False

        n = nb // na + 1

        return b*2 in (a*(n+1)*2)
