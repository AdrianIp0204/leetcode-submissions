class Solution:
    def sortPermutation(self, nums: List[int]) -> int:
        tmp = -1
        for i, n in enumerate(nums):
            if i != n:
                tmp &= n
        return 0 if tmp == -1 else tmp
