class Solution:
    def imageSmoother(self, img: list[list[int]]) -> list[list[int]]:
        h, w = len(img), len(img[0])
        res = [[0]*w for _ in range(h)]

        for i in range(h):
            for j in range(w):
                SUM = n = 0
                for r in range(i-1, i+ 2):
                    if 0 <= r < h:
                        for c in range(j-1, j+2):
                            if 0 <= c < w:
                                SUM += img[r][c]
                                n += 1
                res[i][j] = SUM // n
        return res
