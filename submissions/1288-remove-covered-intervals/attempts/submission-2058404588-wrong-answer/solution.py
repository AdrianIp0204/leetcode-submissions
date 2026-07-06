class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        for i in intervals:
            for j in intervals:
                if i[0] <= j[0] and i[1] >= j[1] and i != j:
                    intervals.remove(j)
        return len(intervals)
