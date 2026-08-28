class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        MAX = max(nums)
        MIN = min(nums)
        if MAX - MIN <= 2 * k:
            return 0
        return MAX - MIN - 2 * k
