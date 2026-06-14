from functools import cache
class Solution:
    def climbStairs(self, n: int) -> int:
        @cache
        def climb(k):
            if k == 1:
                return 1
            elif k == 2:
                return 2
            return climb(k-1) + climb(k-2)
        return climb(n)
