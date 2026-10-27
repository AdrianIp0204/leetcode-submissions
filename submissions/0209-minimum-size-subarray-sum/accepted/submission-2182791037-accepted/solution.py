class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        l, r = 0, 0
        n = len(nums)
        curr = 0
        res = float('inf')

        while r < n:
            curr += nums[r]

            while curr >= target:
                res = min(res, r - l + 1)
                curr -= nums[l]
                l += 1

            r += 1
        return 0 if res == float('inf') else res
