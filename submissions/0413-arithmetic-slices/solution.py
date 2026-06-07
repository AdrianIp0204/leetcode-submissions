class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return 0
        diff = nums.pop() - nums[-1]
        comb = 1
        res = 0
        while len(nums) > 1:
            tmp = nums.pop() - nums[-1]
            if tmp == diff:
                res += comb
                comb += 1
            else:
                comb = 1
            diff = tmp
        return res
