from heapq import heappop, heappush, heapify
class Solution:
    def isPossible(self, target: list[int]) -> bool:
        if len(target) == 1:
            return target[0] == 1
        
        total = sum(target)

        target = [-n for n in target]
        heapify(target) 

        while target[0] < -1:
            largest = -heappop(target)
            rest = total - largest

            if rest == 1:
                return True
            if rest == 0 or largest <= rest:
                return False

            curr = largest % rest

            if curr == 0:
                return False

            total = rest + curr
            heappush(target, -curr)
        return True
