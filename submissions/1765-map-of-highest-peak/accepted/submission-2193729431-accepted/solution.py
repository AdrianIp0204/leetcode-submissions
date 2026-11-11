from collections import deque
class Solution:
    def highestPeak(self, grid: list[list[int]]) -> list[list[int]]:
        h, w = len(grid), len(grid[0])
        q = deque()
        for i in range(h):
            for j in range(w):
                if grid[i][j] == 1:
                    q.append((i, j))
                    grid[i][j] = 0
                else:
                    grid[i][j] = float('inf')

        d = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        while q:
            i, j = q.popleft()
            for di, dj in d:
                r, c = i + di, j + dj
                if 0 <= r < h and 0 <= c < w and grid[r][c] > grid[i][j] + 1:
                    grid[r][c] = grid[i][j] + 1
                    q.append((r,c))
        return grid
