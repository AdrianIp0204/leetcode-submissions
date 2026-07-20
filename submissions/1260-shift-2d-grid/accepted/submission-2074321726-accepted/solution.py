from collections import deque

class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        tmp = []
        c = len(grid[0])
        for i in grid:
            tmp.extend(i)
        tmp = deque(tmp)
        tmp.rotate(k)
        return [list(islice(tmp,i,i+c)) for i in range(0, len(tmp), c)]
