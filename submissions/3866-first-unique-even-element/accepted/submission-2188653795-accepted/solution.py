class Solution:
    def firstUniqueEven(self, nums: list[int]) -> int:
        nap = Counter(nums)
        for n in nums:
            if n % 2 == 0 and nap[n] == 1:
                return n
        return -1
