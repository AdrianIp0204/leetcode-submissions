class Solution:
    def lastVisitedCell(self, grid: list[list[str]]) -> list[int]:
        h, w = len(grid), len(grid[0])
        seen = set()
        def search(i, j):
            seen.add((i,j))
            r, c = i, j
            if grid[i][j] == 'R':
                c += 1
                if c >= w:
                    return (i, j)
            elif grid[i][j] == 'L':
                c -= 1
                if c < 0:
                    return (i, j)
            elif grid[i][j] == 'U':
                r -= 1
                if r < 0:
                    return (i, j)
            else:
                r += 1
                if r >= h:
                    return (i, j)

            if (r, c) in seen:
                return (i, j)

            return search(r, c)
        return search(0, 0)
