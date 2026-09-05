class Solution:
    def firstStableIndex(self, nums: List[int], k: int) -> int:
        m = -1
        c = d = 0

        for i, x in enumerate(nums):
            m = max(m, x)

            if i == c:
                d = m

            if x < d - k:
                c = i + 1

        return c if c < len(nums) else -1
