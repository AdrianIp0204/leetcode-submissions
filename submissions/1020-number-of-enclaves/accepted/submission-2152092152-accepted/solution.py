class Solution:
    def numEnclaves(self, grid: list[list[int]]) -> int:
        height, width = len(grid), len(grid[0])

        if height <= 2 or width <= 2:
            return 0 

        res = 0

        visited = set()
        def search(h, w):
            visited.add((h, w))

            for a in [h-1, h+1]:
                if 0 <= a < height and (a, w) not in visited and grid[a][w] == 1:
                    search(a, w)

            for b in [w-1, w+1]:
                if 0 <= b < width and (h, b) not in visited and grid[h][b] == 1:
                    search(h, b)

        for h in [0, height - 1]:
            for w in range(width):
                if grid[h][w] == 1 and (h, w) not in visited:
                    search(h, w)

        for h in range(1, height):
            for w in [0, width - 1]:
                if grid[h][w] == 1 and (h, w) not in visited:
                    search(h, w)

        for n in range(1, height - 1):
            for m in range(1, width - 1):
                if grid[n][m] == 1 and (n, m) not in visited:
                    before = len(visited)
                    search(n, m)
                    after = len(visited)
                    res += after - before
        
        return res
