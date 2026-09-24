from collections import deque
class Solution:
    def orangesRotting(self, grid: list[list[int]]) -> int:
        height, width = len(grid), len(grid[0])
        if all(grid[i][j] != 1 for i in range(height) for j in range(width)):
            return 0
        res = 0
        frontier = deque([(i, j, 0) for i in range(height) for j in range(width) if grid[i][j] == 2])

        def search():
            h, w, minute = frontier.popleft()
            for i in [h-1, h+1]:
                if 0 <= i < height and grid[i][w] == 1:
                    grid[i][w] = 2
                    frontier.append((i, w, minute + 1))

            for j in [w-1, w+1]:
                if 0 <= j < width and grid[h][j] == 1:
                    grid[h][j] = 2
                    frontier.append((h, j, minute + 1))
            
            return minute

        while frontier:
            res = search()
            
        if any(grid[i][j] == 1 for i in range(height) for j in range(width)):
            return -1
        return res
