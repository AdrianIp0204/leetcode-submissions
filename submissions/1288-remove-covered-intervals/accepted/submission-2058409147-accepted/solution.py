class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))
        res = r = 0
        for a, b in intervals:
            res += b > r
            r = max(r, b)
        return res
