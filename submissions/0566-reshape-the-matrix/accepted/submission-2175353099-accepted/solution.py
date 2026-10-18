class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        h, w = len(mat), len(mat[0])
        tmp = []
        res = []

        if h * w != r * c:
            return mat

        for i in range(h):
            for j in range(w):
                tmp.append(mat[i][j])
                if len(tmp) == c:
                    res.append(tmp)
                    tmp = []
                
        return res
