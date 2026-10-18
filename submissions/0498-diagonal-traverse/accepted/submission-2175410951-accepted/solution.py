class Solution:
    def findDiagonalOrder(self, mat: list[list[int]]) -> list[int]:
        m, n = len(mat), len(mat[0])

        res = []

        i, j = 0, 0

        for d in range(m + n - 1):
            if d % 2:
                j = min(d, n - 1)
                i = d - j
                while 0 <= i < m and 0 <= j < n:
                    res.append(mat[i][j])
                    i += 1
                    j -= 1
            else:
                i = min(d, m - 1)
                j = d - i
                while 0 <= i < m and 0 <= j < n:
                    res.append(mat[i][j])
                    i -= 1
                    j += 1
        return res
