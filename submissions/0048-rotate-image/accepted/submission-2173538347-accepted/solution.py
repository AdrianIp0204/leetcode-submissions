class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        seen = set()
        for i in range(n):
            for j in range(n):
                if (i,j) not in seen:
                    matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
                    seen.add((j,i))

        for row in matrix:
            row.reverse()
