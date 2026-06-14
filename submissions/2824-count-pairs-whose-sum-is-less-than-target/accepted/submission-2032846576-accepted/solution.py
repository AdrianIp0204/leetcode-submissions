class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        L = 0
        R = len(nums) - 1
        res = 0
        nums.sort()
        while R > L:
            total = nums[L] + nums[R]
            if total < target:
                res += R - L
                L += 1
            else:
                R -= 1
        return res
