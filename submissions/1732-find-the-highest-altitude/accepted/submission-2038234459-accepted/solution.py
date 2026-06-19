class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        t, c = 0, 0
        for n in gain:
            c += n
            t = max(t, c)
        return t
