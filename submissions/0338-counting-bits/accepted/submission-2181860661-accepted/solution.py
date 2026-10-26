class Solution:
    def countBits(self, n: int) -> list[int]:
        def count(n):
            c = 0
            while n:
                n &= (n-1)
                c += 1
            return c
        return [count(i) for i in range(0, n+1)]
