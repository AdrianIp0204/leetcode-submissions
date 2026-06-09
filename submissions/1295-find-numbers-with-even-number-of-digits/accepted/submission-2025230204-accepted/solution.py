class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        c = 0
        for n in nums:
            if len(str(n))%2 == 0:
                c+=1
        return c
