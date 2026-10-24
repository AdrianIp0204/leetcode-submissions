class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        target = (m-1, n-1)
        res = 0
        def search(i, j):
            nonlocal res
            if (i, j) == target:
                res += 1
                return
            if i + 1 < m:
                search(i + 1, j)
            if j + 1 < n:
                search(i, j + 1)
        search(0, 0)
        return res
