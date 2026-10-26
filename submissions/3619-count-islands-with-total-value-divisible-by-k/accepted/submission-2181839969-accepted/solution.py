class Solution:
    def countIslands(self, grid: List[List[int]], k: int) -> int:
        seen = set()
        h, w = len(grid), len(grid[0])
        res = 0

        def search(i, j):
            
            if i < 0 or i >= h or j < 0 or j >= w or (i, j) in seen or grid[i][j] == 0:
                return 0

            seen.add((i, j))

            return grid[i][j] + search(i+1,j) + search(i-1,j) + search(i,j+1) + search(i, j-1)
        

        for i in range(h):
            for j in range(w):
                if grid[i][j] != 0 and (i, j) not in seen:
                    if search(i, j) % k == 0:
                        res += 1
        
        return res
