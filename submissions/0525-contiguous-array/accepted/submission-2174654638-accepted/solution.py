class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        res = 0
        seen = {0:-1}
        curr = 0
        for i, n in enumerate(nums):
            curr += 1 if n else -1

            if curr in seen:
                res = max(res, i - seen[curr])
            
            else:
                seen[curr] = i

        return res
