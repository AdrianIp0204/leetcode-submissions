import heapq
class Solution:
    def maximizeSum(self, nums: list[int], k: int) -> int:
        tmp = [(0,-1)] * k
        heapify(tmp)
        res = 0

        def maxx(n):
            return int(''.join(list(sorted(str(n), reverse=True))))
        for i, n in enumerate(nums):
            if len(str(n)) >= len(str(tmp[0][0])):
                now = maxx(n)
                if now == n:
                    continue
                if now > tmp[0][0]:
                    heappop(tmp)
                    heappush(tmp, (now, i))

        for (n, i) in tmp:
            nums[i] = n
        return sum(nums)
