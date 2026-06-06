class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        nums.sort()
        m = 1
        c = 1
        curr = nums.pop()
        while nums:
            if curr == nums[-1]:
                curr = nums.pop()
                continue
            elif curr - nums[-1] == 1:
                c += 1
                if c > m:
                    m = c
            else:
                c = 1
            curr = nums.pop()
        return m
