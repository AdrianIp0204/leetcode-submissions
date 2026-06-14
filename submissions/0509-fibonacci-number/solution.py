from functools import cache
class Solution:
    def fib(self, n: int) -> int:
        @cache
        def f(k):
            if k<2:
                return k
            return f(k-1) + f(k-2)
        return f(n)
