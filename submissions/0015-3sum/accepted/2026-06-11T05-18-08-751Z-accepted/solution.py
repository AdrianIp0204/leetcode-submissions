class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        l = len(nums) - 1
        res = []
        for mid in range(1, l):
            right = l
            target = nums[mid]
            for left in range(mid):
                numLeft = nums[left]
                while right > mid:
                    if numLeft + nums[right] == -target:
                        res.append([numLeft, target, nums[right]])
                    right -= 1
        return res
