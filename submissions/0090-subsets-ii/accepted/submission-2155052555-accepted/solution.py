class Solution:
    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        
        nums.sort()
        l = len(nums)
        res = []

        def backtrack(path, index):

            res.append(path.copy())

            if index == l:
                return 
            
            for i in range(index, l):
                if index == i or nums[i] != nums[i-1]:
                    path.append(nums[i])
                    backtrack(path, i + 1)
                    path.pop()

        backtrack([],0)
        return res
