import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        sl = [-i for i in stones]
        heapq.heapify(sl)
        while len(sl) > 1:
            heapq.heappush(sl, heapq.heappop(sl) - heapq.heappop(sl))
        return 0 if sl == [] else -sl[0]
