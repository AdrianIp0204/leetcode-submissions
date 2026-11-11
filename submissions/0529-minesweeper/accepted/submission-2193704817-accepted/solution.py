from collections import deque
class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        r, c = click
        if board[r][c] == 'M':
            board[r][c] = 'X'
            return board

        height, width = len(board), len(board[0])
        q = deque([(r, c)])
        explored = {r, c}

        while q:
            i, j = q.popleft()
            neighbours = []
            c = 0
            for h in range(i - 1, i + 2):
                if 0 <= h < height:
                    for w in range(j -1, j + 2):
                        if 0 <= w < width:
                            if board[h][w] == 'E' and (h,w) not in explored:
                                neighbours.append((h, w))
                            elif board[h][w] == 'M':
                                c += 1
            
            if c == 0:
                board[i][j] = 'B'
                for h, w in neighbours:
                    explored.add((h,w))
                    q.append((h, w))
            else:
                board[i][j] = str(c)
        return board
