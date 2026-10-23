class Solution:
    def sortPermutation(self, nums: List[int]) -> int:
        tmp = (1 << max(nums).bit_length()) - 1
        for num, correct in zip(nums, sorted(nums)):
            if num != correct:
                tmp &= num
        return tmp
