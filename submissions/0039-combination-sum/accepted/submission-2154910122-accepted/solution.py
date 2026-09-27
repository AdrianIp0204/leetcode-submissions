class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        res = []

        def backtrack(path, start, curr):
            if curr == target:
                res.append(path.copy())
                return
            if curr > target:
                return

            for i in candidates:
                if i >= start:
                    path.append(i)
                    backtrack(path, i, curr + i)
                    path.pop()


        backtrack([], 0, 0)
        return res
