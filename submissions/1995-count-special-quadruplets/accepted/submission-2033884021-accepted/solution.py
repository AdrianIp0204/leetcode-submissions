class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        l = len(nums)
        res = 0
        for a in range(0, l - 3):
            for b in range(a + 1, l - 2):
                for c in range(b + 1, l - 1):
                    for d in range(c + 1, l):
                        if nums[a] + nums[b] + nums[c] == nums[d]:
                            res += 1
        return res
