class Solution:
    def minMoves2(self, nums: list[int]) -> int:
        mid = median(nums)
        return int(sum(abs(n - mid) for n in nums))
