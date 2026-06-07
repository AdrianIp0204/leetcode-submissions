class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        res = []
        l = len(nums)
        c = 0
        for i, n in enumerate(nums):
            for x in nums:
                if n > x:
                    c += 1
            res.append(c)
            c = 0
        return res
