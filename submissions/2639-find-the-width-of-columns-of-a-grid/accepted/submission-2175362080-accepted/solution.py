class Solution:
    def findColumnWidth(self, grid: list[list[int]]) -> list[int]:
        return [max(len(str(c)) for c in nums) for nums in zip(*grid)]
