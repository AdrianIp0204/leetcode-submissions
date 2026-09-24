class Solution:
    def smallestIndex(self, nums: List[int]) -> int:
        for i, n in enumerate(nums):
            summ = 0
            while n:
                summ += n%10
                n //= 10
            if i == summ:
                return i
        return -1
