class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        seen = set()
        h, w = len(grid), len(grid[0])

        def search(i, j):
            seen.add((i, j))
            return grid[i][j] + sum(search(r, j) for r in [i-1, i+1] if 0 <= r < h and grid[r][j] != 0 and (r, j) not in seen) + sum(search(i, c) for c in [j-1, j+1] if 0 <= c < w and grid[i][c] != 0 and(i, c) not in seen)
        
        return max(search(i, j) for i in range(h) for j in range(w) if grid[i][j] != 0 and (i,j) not in seen)
