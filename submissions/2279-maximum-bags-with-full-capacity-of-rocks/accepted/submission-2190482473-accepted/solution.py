import heapq
class Solution:
    def maximumBags(self, capacity: list[int], rocks: list[int], additionalRocks: int) -> int:
        heap = []
        res = 0
        for r, c in zip(rocks, capacity):
            if r >= c:
                res += 1
            else:
                heappush(heap, c-r)
        while heap and additionalRocks >= heap[0]:
            additionalRocks -= heappop(heap)
            res += 1
        return res
