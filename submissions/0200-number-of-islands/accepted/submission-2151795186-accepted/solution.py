class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        height, width = len(grid), len(grid[0])
        
        explored = set()

        frontier = set()

        island = 0

        def search():
            h, w = frontier.pop()
            
            explored.add((h, w))
            
            for i in [h+1, h-1]:
                if 0 <= i < height:
                    if grid[i][w] == '1' and (i, w) not in explored:
                            frontier.add((i, w))

            for j in [w+1, w-1]:
                if 0 <= j < width:
                    if grid[h][j] == '1' and (h, j) not in explored:
                        frontier.add((h, j))

        for h in range(height):
            for w in range(width):
                if grid[h][w] == '1' and (h, w) not in explored:
                    island += 1
                    frontier.add((h, w))
                    while frontier:
                        search()
        
        return island
