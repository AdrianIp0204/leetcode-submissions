class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        c=0
        res=[]
        for n in nums:
            c+=n
            res.append(c)
        return res
