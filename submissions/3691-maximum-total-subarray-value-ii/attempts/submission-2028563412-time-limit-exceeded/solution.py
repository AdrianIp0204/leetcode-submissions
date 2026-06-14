from heapq import heappush, heappop

class Solution:
    def maxTotalValue(self, nums, k):
        n = len(nums)
        heap = []

        def value(l, r):
            sub = nums[l:r+1]
            return max(sub) - min(sub)

        for l in range(n):
            r = n - 1
            heappush(heap, (-value(l, r), l, r))

        ans = 0

        for _ in range(k):
            neg_val, l, r = heappop(heap)
            ans += -neg_val
            if r > l:
                r -= 1
                heappush(heap, (-value(l, r), l, r))

        return ans
