class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        res = 0
        l = len(nums)
        
        for i in range(l):
            tmp = set()
            for j in range(i, l):
                tmp.add(nums[j])
                res += len(tmp) * len(tmp)

        return res
