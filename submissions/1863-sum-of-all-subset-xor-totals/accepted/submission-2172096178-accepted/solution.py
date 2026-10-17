class Solution:
    def subsetXORSum(self, nums: list[int]) -> int:
        res = 0
        l = len(nums)
        def add(i, n):
            if i == l:
                return n
            yes = add(i + 1, n ^ nums[i])
            no = add(i + 1, n)
            return yes + no
        return add(0, 0)
