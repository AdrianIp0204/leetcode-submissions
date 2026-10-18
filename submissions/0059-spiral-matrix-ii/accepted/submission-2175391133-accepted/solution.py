class Solution:
    def generateMatrix(self, n: int) -> list[list[int]]:
        res = [[0] * n for _ in range(n)]
        
        top, bottom = 0, n - 1
        left, right = 0, n - 1

        curr = 1

        while top <= bottom and left <= right:

            for j in range(left, right + 1):
                res[top][j] = curr
                curr += 1
            top += 1

            for i in range(top, bottom + 1):
                res[i][right] = curr
                curr += 1
            right -= 1

            if top < bottom:
                for j in range(right, left - 1, -1):
                    res[bottom][j] = curr
                    curr += 1
                bottom -= 1

            if left < right:
                for i in range(bottom, top - 1, -1):
                    res[i][left] = curr
                    curr += 1
                left += 1

        return res
