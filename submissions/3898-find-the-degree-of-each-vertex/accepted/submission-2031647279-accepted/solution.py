class Solution:
    def findDegrees(self, matrix: list[list[int]]) -> list[int]:
        return [sum(m) for m in matrix]
