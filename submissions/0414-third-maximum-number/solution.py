class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        unique = sorted(set(nums))
        return unique[-3] if len(unique) >= 3 else unique[-1]
