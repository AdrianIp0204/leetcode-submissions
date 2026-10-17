class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        length = len(nums)
        res = 0
        for i in range(length):
            curr = nums[i]
            if curr == k:
                res += 1
                continue
            for j in range(i + 1, length):
                curr += nums[j]
                if curr == k:
                    res += 1
                    break
        return res
