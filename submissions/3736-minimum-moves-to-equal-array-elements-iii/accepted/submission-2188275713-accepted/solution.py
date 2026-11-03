class Solution:
    def minMoves(self, nums: List[int]) -> int:
        MAX = max(nums)
        return sum(MAX - n for n in nums)
