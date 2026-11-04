class Solution:
    def sortArrayByParityII(self, nums: list[int]) -> list[int]:
        n = len(nums)
        res = [0] * n
        odd, even = 1, 0
        for n in nums:
            if n % 2:
                res[odd] = n
                odd += 2
            else:
                res[even] = n
                even += 2
        return res
