class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]) -> int:
        minL, minW, res = 3000, 3000, 3000

        n = len(landStartTime)
        m = len(waterStartTime)

        for i in range(n):
            minL = min(minL, landStartTime[i] + landDuration[i])
        
        for j in range(m):
            minW = min(minW, waterStartTime[j] + waterDuration[j])
            res = min(res, max(minL, waterStartTime[j]) + waterDuration[j])

        for k in range(n):
            res = min(res, max(minW, landStartTime[k]) + landDuration[i])

        return res
