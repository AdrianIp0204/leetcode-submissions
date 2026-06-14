class Solution:
    def isPathCrossing(self, path: str) -> bool:
        moves = {
            "N" : (0, 1),
            "E" : (1, 0),
            "S" : (0, -1),
            "W" : (-1, 0)
        }
        visited = {(0,0)}
        x, y = 0, 0

        for a in path:
            dx, dy = moves[a]
            x += dx
            y += dy
            if (x, y) in visited:
                return True
            visited.add((x, y))
        return False
