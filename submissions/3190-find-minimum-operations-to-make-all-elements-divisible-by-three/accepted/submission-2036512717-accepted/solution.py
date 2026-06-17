class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        c = 0
        for n in nums:
            if n%3:
                c += 1
        return c
