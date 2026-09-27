class Solution:
    def combinationSum2(self, candidates: list[int], target: int) -> list[list[int]]:
        
        res = []

        def backtrack(path, start, curr):
            if curr == target:
                if path not in res:
                    res.append(path.copy())
                return
            if curr > target:
                return
            
            for i in candidates.copy():
                if i >= start:
                    candidates.remove(i)
                    path.append(i)
                    backtrack(path, i, curr + i)
                    candidates.append(i)
                    path.pop()

        backtrack([],0,0)
        return res
