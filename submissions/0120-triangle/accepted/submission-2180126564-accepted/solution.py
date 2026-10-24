class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        for row in range(len(triangle) - 1, 0, -1):
            for index in range(len(triangle[row - 1])):
                triangle[row - 1][index] += min(triangle[row][index], triangle[row][index + 1])
        return triangle[0][0]
