class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        l, r = 0, sum(nums[1:])
        res = []
        x = nums[0]
        for n in nums:
            if n != x:
                r -= n
            res.append(abs(l - r))
            l += n
        return res
