from collections import deque
class Solution:
    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:
        length = len(grid)
        if grid[0][0] == 1 or grid[length-1][length-1] == 1:
            return -1
        
        explored = {(0, 0)}
        frontier = deque([(0, 0, 1)])

        def search():
            h, w, d = frontier.popleft()


            if (h, w) == (length - 1, length - 1):
                return d

            for i in range(h-1, h+2):
                for j in range(w-1, w+2):
                    if 0 <= i < length and 0 <= j < length:
                        if grid[i][j] == 0 and (i, j) not in explored:
                            explored.add((i, j))
                            frontier.append((i, j, d + 1))

        while frontier:
            d = search()
            if d is not None:
                return d
        
        return -1
