class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        res = []
        path = []

        def backtrack(path, start):
            if len(path) == k:
                res.append(path.copy())
                return

            for i in range(start + 1, n+1):

                path.append(i)

                backtrack(path, i)

                path.pop()
        
        backtrack(path, 0)

        return res
