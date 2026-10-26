from collections import defaultdict
class NeighborSum:

    def __init__(self, grid: List[List[int]]):
        self.h = len(grid)
        self.w = len(grid[0])
        self.grid = grid
        self.index = defaultdict(tuple)
        for i in range(self.h):
            for j in range(self.w):
                self.index[str(grid[i][j])] = (i, j)

    def adjacentSum(self, value: int) -> int:
        
        i, j = self.index[str(value)]
        tmp = 0
        for r in [i-1,i+1]:
            if 0 <= r < self.h:
                tmp += self.grid[r][j]
        for c in [j-1, j+ 1]:
            if 0 <= c < self.w:
                tmp += self.grid[i][c]
        return tmp


    def diagonalSum(self, value: int) -> int:
        i, j = self.index[str(value)]
        tmp = 0
        for r in [i-1,i+1]:
            if 0 <= r < self.h:
                for c in [j-1, j+ 1]:
                    if 0 <= c < self.w:
                        tmp += self.grid[r][c]
        return tmp

        


# Your NeighborSum object will be instantiated and called as such:
# obj = NeighborSum(grid)
# param_1 = obj.adjacentSum(value)
# param_2 = obj.diagonalSum(value)
