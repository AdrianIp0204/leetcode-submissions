class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        res = 0
        for n in grid:
            for m in n:
                if m < 0:
                    res += 1
        return res
