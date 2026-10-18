class Solution:
    def gameOfLife(self, board: list[list[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        live, die = set(), set()
        m, n = len(board), len(board[0])

        for h in range(m):
            for w in range(n):
                living = 0

                for i in range(h - 1, h + 2):
                    if 0 <= i < m:
                        for j in range(w - 1, w + 2):
                            
                            if 0 <= j < n and (i, j) != (h, w):

                                if board[i][j] == 1:
                                    living += 1
                            

                if board[h][w] == 1:
                    if living < 2 or living > 3:
                        die.add((h, w))
                else:
                    
                    if living == 3:
                        live.add((h, w))

        for (i, j) in live:
            board[i][j] = 1

        for (i, j) in die:
            board[i][j] = 0
