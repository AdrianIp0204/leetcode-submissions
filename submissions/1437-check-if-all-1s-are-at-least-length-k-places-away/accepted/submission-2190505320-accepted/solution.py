class Solution:
    def kLengthApart(self, nums: list[int], k: int) -> bool:
        curr = float('inf')
        j = 0
        n = len(nums)
        while j < n and nums[j] == 0:
            j += 1
        for i in range(j, n):
            if nums[i] == 1:
                if curr < k:
                    return False
                curr = 0
            else:
                curr += 1
        return True
