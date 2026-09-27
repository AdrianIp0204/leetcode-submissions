class Solution:
    def combinationSum3(self, k: int, n: int) -> list[list[int]]:
        res = []
        def backtrack(path, num, curr):
            if len(path) > k:
                return
            if len(path) == k and curr == n:
                res.append(path.copy())
                return
            if curr > n:
                return

            for i in range(num, 10):
                path.append(i)
                backtrack(path, i + 1, curr + i)
                path.pop()

        backtrack([], 1, 0)
        return res
