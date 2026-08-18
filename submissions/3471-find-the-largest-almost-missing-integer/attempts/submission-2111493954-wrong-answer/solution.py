from collections import deque

class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        c = Counter(nums)
        if len(nums) == k:
            res = -1
            for k, v in c.items():
                if v == 1:
                    res = max(res, k)
            return res
        return max(nums[0] if c[nums[0]] == 1 else -1, nums[-1] if c[nums[-1]] == 1 else -1)
