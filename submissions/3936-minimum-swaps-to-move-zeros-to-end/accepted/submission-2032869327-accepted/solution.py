class Solution:
    def minimumSwaps(self, nums: list[int]) -> int:
        c = nums.count(0)
        res = c
        for _ in range(c):
            if nums.pop() == 0:
                res -= 1
        return res
