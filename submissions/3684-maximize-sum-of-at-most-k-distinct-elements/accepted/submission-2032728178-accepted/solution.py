import heapq
class Solution:
    def maxKDistinct(self, nums: List[int], k: int) -> List[int]:
        nist = [-i for i in set(nums)]
        heapq.heapify(nist)
        res = []
        while k and nist:
            res.append(-heapq.heappop(nist))
            k -= 1
        return res
