class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        res = [0,0]
        nap = {i:0 for i in range(1, len(nums) + 1)}
        for n in nums:
            nap[n] += 1
        for n, f in nap.items():
            if f == 0:
                res[1] = n
            elif f == 2:
                res[0] = n
        return res
