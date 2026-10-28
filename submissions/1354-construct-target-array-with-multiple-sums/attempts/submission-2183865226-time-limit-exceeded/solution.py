from heapq import heappop, heappush
class Solution:
    def isPossible(self, target: list[int]) -> bool:
        target = [-n for n in target]
        heapify(target)
        while target[0] < -1:
            heappush(target, heappop(target) - sum(target))
        if all(n == -1 for n in target):
            return True
        return False
