class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums) + 1
        nl = [-1] * n
        for i in nums:
            nl[i] = i
        for i in range(n):
            if nl[i] == -1:
                return i
