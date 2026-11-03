class Solution:
    def findTargetSumWays(self, nums: list[int], target: int) -> int:
        res = 0
        n = len(nums)

        def search(i, curr):
            nonlocal res
            if i == n:
                if curr == target:
                    res += 1
                return
            search(i+1, curr - nums[i])
            search(i+1, curr + nums[i])
        search(0, 0)
        return res
