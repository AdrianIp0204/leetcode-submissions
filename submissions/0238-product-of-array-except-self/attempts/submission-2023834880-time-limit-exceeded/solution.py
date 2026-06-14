class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        for i in range(len(nums)):
            for j, n in enumerate(nums):
                if i != j:
                    res[i] *= n
        return res
