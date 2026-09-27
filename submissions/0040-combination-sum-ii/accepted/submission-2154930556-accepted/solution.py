class Solution:
    def combinationSum2(self, candidates: list[int], target: int) -> list[list[int]]:
        
        res = []
        l = len(candidates)
        candidates.sort()

        def backtrack(path, start, curr):
            if curr == target:
                res.append(path.copy())
                return
            if curr > target:
                return
            
            for i in range(start, l):
                if i == start or candidates[i] != candidates[i-1]:
                    path.append(candidates[i])
                    backtrack(path, i + 1, curr + candidates[i])
                    path.pop()

        backtrack([],0,0)
        return res
