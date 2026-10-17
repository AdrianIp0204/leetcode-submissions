class Solution:
    def diagonalSum(self, mat: list[list[int]]) -> int:
        l, r = 0, len(mat[0]) - 1
        res = 0
        for row in mat:
            if l == r:
                res += row[l]
            else:
                res += row[l] + row[r]
            l += 1
            r -= 1
        return res
