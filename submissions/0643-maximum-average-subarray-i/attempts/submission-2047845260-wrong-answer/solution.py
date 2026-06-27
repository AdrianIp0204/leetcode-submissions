class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        l = len(nums)
        curr = sum(nums[i] for i in range(k))
        ans = curr
        for i in range(0, l - k):
            ans = max(ans, curr - nums[i] + nums[i+k])
        return ans/k
