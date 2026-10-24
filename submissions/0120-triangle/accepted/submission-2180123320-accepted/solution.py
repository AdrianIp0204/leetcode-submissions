from functools import cache 
class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        l = len(triangle) - 1
        @cache
        def search(row, index):
            if row == l:
                return triangle[row][index]
            return triangle[row][index] + min(search(row + 1, index), search(row + 1, index + 1))
        return search(0, 0)
