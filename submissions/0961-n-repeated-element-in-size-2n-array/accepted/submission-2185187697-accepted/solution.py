class Solution:
    def repeatedNTimes(self, nums: list[int]) -> int:
        return max(Counter(nums).items(), key=lambda x: x[1])[0]
