class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        l = len(nums)
        res = 0
        for i in range(l-2):
            for j in range(i+1, l-1):
                if nums[j] - nums[i] == diff:
                    for k in range(i+2, l):
                        if nums[k] - nums[j] == diff:
                            res += 1
        return res
