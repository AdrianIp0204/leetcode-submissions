class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        height, width = len(matrix), len(matrix[0])
        row = set()
        column = set()
        for h in range(height):
            for w in range(width):
                if matrix[h][w] == 0:
                    row.add(h)
                    column.add(w)
        
        for i in row:
            for j in range(width):
                matrix[i][j] = 0

        for j in column:
            for i in range(height):
                matrix[i][j] = 0
