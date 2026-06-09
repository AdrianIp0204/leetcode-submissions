class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        l, r = 0, sum(nums)
        res = []
        for n in nums:
            r -= n
            res.append(abs(l - r))
            l += n
        return res
