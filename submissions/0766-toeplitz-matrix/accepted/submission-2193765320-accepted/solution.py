from collections import deque
class Solution:
    def isToeplitzMatrix(self, matrix: list[list[int]]) -> bool:
        h, w = len(matrix), len(matrix[0])
        if h == 1 or w == 1:
            return True
        tmp = deque(matrix[0])
        for i in range(1, h):
            for j in range(1, w):
                if matrix[i][j] != tmp[j-1]:
                    return False
            tmp.pop()
            tmp.appendleft(matrix[i][0])
        return True
