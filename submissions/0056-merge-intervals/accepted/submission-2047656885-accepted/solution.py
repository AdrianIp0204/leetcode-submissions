class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        ans = []

        for a, b in intervals:
            if not ans or a > ans[-1][1]:
                ans.append([a, b])
            else:
                ans[-1][1] = max(ans[-1][1], b)

        return ans
