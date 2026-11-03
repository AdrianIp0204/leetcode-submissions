class Solution:
    def isMiddleElementUnique(self, nums: list[int]) -> bool:
        return Counter(nums)[nums[len(nums)//2]] == 1
