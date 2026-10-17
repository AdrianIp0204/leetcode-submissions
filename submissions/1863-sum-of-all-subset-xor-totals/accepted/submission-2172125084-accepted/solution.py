class Solution:
    def subsetXORSum(self, nums: list[int]) -> int:
        l = len(nums)
        def add(i, n):
            if i == l:
                return n
            return add(i + 1, n ^ nums[i]) + add(i + 1, n)
        return add(0, 0)
