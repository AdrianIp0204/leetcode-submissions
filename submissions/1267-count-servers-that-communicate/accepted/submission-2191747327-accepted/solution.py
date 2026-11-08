class Solution:
    def countServers(self, grid: list[list[int]]) -> int:
        h, w = len(grid), len(grid[0])
        seen = set()
        for i in range(h):
            tmp = []
            for j in range(w):
                if grid[i][j] == 1:
                    tmp.append((i, j))
            if len(tmp) > 1:
                for p in tmp:
                    seen.add(p)

        for j in range(w):
            tmp = []
            for i in range(h):
                if grid[i][j] == 1:
                    tmp.append((i, j))
            if len(tmp) > 1:
                for p in tmp:
                    seen.add(p)

        return len(seen)
