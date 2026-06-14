class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        res = []
        nap = {i:0 for i in range(1, len(nums) + 1)}
        for n in nums:
            nap[n] += 1
        for n, f in nap.items():
            if f != 1:
                res.append(n)
        return res
