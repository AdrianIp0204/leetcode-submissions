class Solution:
    def solve(self, board: list[list[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        region = set()
        h, w = len(board), len(board[0])
        def search(i, j):
            if board[i][j] == 'X':
                return
            region.add((i,j))
            for r in [i-1, i+1]:
                if 0 <= r < h and (r, j) not in region:
                    search(r, j)
            for c in [j-1, j+1]:
                if 0 <= c < w and (i,c) not in region:
                    search(i, c) 
        
        for i in [0, h - 1]:
            for j in range(w):
                if board[i][j] == 'O' and (i, j) not in region:
                    search(i, j)

        for j in [0, w - 1]:
            for i in range(h):
                if board[i][j] == 'O' and (i,j) not in region:
                    search(i, j)

        for i in range(h):
            for j in range(w):
                if board[i][j] == 'O' and (i,j) not in region:
                    board[i][j] = 'X'

        return board
