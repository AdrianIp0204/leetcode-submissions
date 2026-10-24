from heapq import heapify, heappop, heappush
class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        stones = [-n for n in stones]
        heapify(stones)
        while len(stones) > 1:
            tmp = heappop(stones) - heappop(stones)
            if tmp:
                heappush(stones, tmp)
        return -stones[0] if stones else 0
