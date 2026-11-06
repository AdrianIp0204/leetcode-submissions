class Solution:
    def largestPerimeter(self, nums: list[int]) -> int:
        if len(nums) != 3:
            return 0
        a, b, c = nums
        return sum(nums) if any([a+b>c, b+c>a, a+c>b]) else 0
