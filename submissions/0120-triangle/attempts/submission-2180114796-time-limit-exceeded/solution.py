class Solution:
    def minimumTotal(self, triangle: list[list[int]]) -> int:
        depth = len(triangle)
        def search(row, index, curr):
            if row == depth:
                return curr
            curr += triangle[row][index]
            return min(search(row + 1, index + 1, curr), search(row + 1, index, curr))

        return search(0, 0, 0)
