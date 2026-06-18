class Solution:
    def angleClock(self, h: int, m: int) -> float:
        am = 6.0 * m
        ah = 30.0 * (h % 12) + 0.5 * m
        diff = abs(ah - am)
        if diff <= 180.0:
            return diff
        return 360.0 - diff
