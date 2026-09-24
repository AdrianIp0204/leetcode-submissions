class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        height, width = len(grid), len(grid[0])

        res = {0}

        def search(h, w):
            used.add((h, w))

            area = 1

            for i in [h - 1, h+1]:
                if 0 <= i < height and (i, w) not in used and grid[i][w] == 1:
                    area += search(i, w)


            for j in [w - 1, w + 1]:
                if 0 <= j < width and (h, j) not in used and grid[h][j] == 1:
                    area += search(h, j)

            return area

        for h in range(height):
            for w in range(width):
                if grid[h][w] == 1:
                    used = set()
                    res.add(search(h, w))

        return max(res)
