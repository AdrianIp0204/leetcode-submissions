class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        res = []

        def backtrack(path, start):
            if sum(path) == target:
                res.append(path.copy())
                return
            if sum(path) > target:
                return

            for i in candidates:
                if i >= start:
                    path.append(i)
                    backtrack(path, i)
                    path.pop()

        backtrack([], 0)
        return res
