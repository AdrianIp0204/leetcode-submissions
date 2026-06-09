class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        res = 0
        freq = {}
        while n:
            i = n%10
            freq[i] = freq.get(i, 0) + 1
            n //= 10
        for d, x in freq.items():
            res += d*x
        return res
