from collections import Counter
class Solution:
    def permuteUnique(self, nums: list[int]) -> list[list[int]]:
        res = []
        l = len(nums)
        nap = Counter(nums)
        def dp(path):
            if len(path) == l:
                res.append(path.copy())
                return 
            
            for k, v in nap.items():
                if v > 0:
                    path.append(k)
                    nap[k] -= 1
                    dp(path)
                    nap[k] += 1
                    path.pop()

        dp([])

        return res
