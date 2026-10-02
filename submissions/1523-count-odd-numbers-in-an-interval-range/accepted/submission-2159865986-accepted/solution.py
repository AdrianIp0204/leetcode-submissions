class Solution:
    def countOdds(self, low: int, high: int) -> int:
        res = 0
        if low % 2 or high % 2:
            res += 1
        n = high - low
        res += n // 2
        return res
