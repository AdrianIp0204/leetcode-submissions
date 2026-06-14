class Solution:
    def minimumSwaps(self, nums: list[int]) -> int:
        c = nums.count(0)
        k = 0
        for i in range(len(nums)-1, len(nums)-1-c, -1):
            if nums[i] == 0:
                k += 1
        return c - k
