class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i, j = 0, len(matrix[0]) - 1
        l = len(matrix)

        while True:
            if matrix[i][j] < target:
                if i + 1 < l:
                    i += 1
                else:
                    return False
            elif matrix[i][j] > target:
                if j - 1 >= 0:
                    j -= 1
                else:
                    return False
            else:
                return True
