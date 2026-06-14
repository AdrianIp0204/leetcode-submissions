class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(min(nums) + 1, max(nums)):
            if i not in nums:
                res.append(i)
        return res
