class Solution:
    def updateMatrix(self, mat: list[list[int]]) -> list[list[int]]:
        h, w = len(mat), len(mat[0])
        for i in range(h):
            for j in range(w):
                if mat[i][j] == 1:
                    
                    MIN = float('inf')
                    for r in [i-1,i+1]:
                        if 0 <= r < h:
                            MIN = min(MIN, mat[r][j])

                    for c in [j+1, j-1]:
                        if 0 <= c < w:
                            MIN = min(MIN, mat[i][c])

                    mat[i][j] = MIN + 1
        return mat
