class Solution:
    def earliestFinishTime(self, StartL: List[int], DurationL: List[int], StartW: List[int], DurationW: List[int]) -> int:
        earliestL = float("inf")
        for s, d in zip(StartL, DurationL):
            earliestL = min(earliestL, s + d)

        earliestW = float("inf")
        for s, d in zip(StartW, DurationW):
            earliestW = min(earliestW, s + d)

        ans = float("inf")

        for s, d in zip(StartW, DurationW):
            finish = max(earliestL, s) + d
            ans = min(ans, finish)

        for s, d in zip(StartL, DurationL):
            finish = max(earliestW, s) + d
            ans = min(ans, finish)

        return ans
