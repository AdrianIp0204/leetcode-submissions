class Solution:
    def sortArrayByParity(self, nums: list[int]) -> list[int]:
        n = len(nums)
        if n == 1:
            return nums
        i, j = 0, 1
        while j < n and i < n:
            if nums[i] % 2:
                while j < n - 1 and nums[j] % 2:
                    j += 1
                nums[i], nums[j] = nums[j], nums[i]
            i += 1
        return nums
