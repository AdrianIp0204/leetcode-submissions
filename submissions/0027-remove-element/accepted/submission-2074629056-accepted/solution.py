class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        res = 0
        l = len(nums)
        while val in nums:
            nums.remove(val)
            res += 1
        return l - res
