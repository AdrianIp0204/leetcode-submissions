class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        res = 0
        for _ in range(max(start.bit_length(), goal.bit_length())):
            if start & 1 != goal & 1:
                res += 1
            start >>= 1
            goal >>= 1
        return res
