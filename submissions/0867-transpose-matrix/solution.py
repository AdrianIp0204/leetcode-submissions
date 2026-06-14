class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        row = len(matrix)
        col = len(matrix[0])
        res = []
        for i in range(col):
            tmp = []
            for j in range(row):
                tmp.append(matrix[j][i])
            res.append(tmp)
        return res
