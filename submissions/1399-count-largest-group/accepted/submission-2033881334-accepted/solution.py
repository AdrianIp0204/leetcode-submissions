class Solution:
    def countLargestGroup(self, n: int) -> int:
        nap = {}
        m = 0
        for i in range(1, n+1):
            k = 0
            while i:
                k += i % 10
                i //= 10
            nap[k] = nap.get(k, 0) + 1
            if nap[k] > m:
                m = nap[k]
        return sum(1 for v in nap.values() if v == m)
