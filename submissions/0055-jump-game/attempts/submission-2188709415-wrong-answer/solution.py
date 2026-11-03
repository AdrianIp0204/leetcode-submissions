class Solution:
    def canJump(self, nums: list[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True
        far = 0
        for i in range(n):
            if i > far:
                return False
            far = max(far, nums[i] + i)
            if far >= n:
                return True
        return False
