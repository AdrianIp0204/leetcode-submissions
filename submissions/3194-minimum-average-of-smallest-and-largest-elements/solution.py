import heapq
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        l = len(nums)//2
        MAX = [-i for i in nums]
        heapq.heapify(nums)
        heapq.heapify(MAX)
        res = []
        for _ in range(l):
            res.append((heapq.heappop(nums)-heapq.heappop(MAX))/2)
        return min(res)
