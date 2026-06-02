class Solution:
    def countPrimes(self, n: int) -> int:
        if n == 0 or n == 1 or n == 2:
            return 0
        pr = [True]*(n)
        pr[0] = pr[1] = False

        p = 2
        while p * p <= n:
            if pr[p]:
                for i in range(p * p, n, p):
                    pr[i] = False
            p += 1
        
        return len([p for p in range(2, n) if pr[p]])
