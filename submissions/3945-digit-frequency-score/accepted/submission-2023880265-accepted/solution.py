class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        return sum(int(d) for d in str(n))
