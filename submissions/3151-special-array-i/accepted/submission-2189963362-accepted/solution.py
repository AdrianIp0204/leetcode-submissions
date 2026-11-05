class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        even = nums[0] % 2 == 0
        for i, n in enumerate(nums):
            if i % 2 == 0:
                if not ((n % 2 == 0) == even):
                    return False
            else:
                if (n % 2 == 0) == even:
                    return False
        return True
