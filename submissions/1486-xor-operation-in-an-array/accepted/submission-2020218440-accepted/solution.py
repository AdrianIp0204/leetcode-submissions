class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        c, r = 0, 0
        while c != n:
            r = r ^ (start + 2 * c)
            c += 1
        return r
