class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        
        res = []
        l = len(nums)
        def backtrack(path, index):
            res.append(path.copy())
            if len(path) == l:
                return
            
            for i in range(index, l):
                path.append(nums[i])
                backtrack(path, i + 1)
                path.pop()

        backtrack([], 0)
        return res
