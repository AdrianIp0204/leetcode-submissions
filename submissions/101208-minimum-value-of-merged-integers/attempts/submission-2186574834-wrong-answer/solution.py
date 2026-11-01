class Solution:
    def minMergedInteger(self, nums: list[int]) -> int:
        tmp = []
        for i in range(1, len(nums)):
            tmp.append(int(str(nums[i-1])+str(nums[i])))
        return min(tmp)
