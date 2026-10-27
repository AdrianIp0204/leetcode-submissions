class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        for row in board:
            tmp = set()
            for n in row:
                if n != '.':
                    if n in tmp:
                        return False
                    tmp.add(n)
        
        for i in range(9):
            tmp = set()
            for j in range(9):
                if board[j][i] != '.':
                    if board[j][i] in tmp:
                        return False
                    tmp.add(board[j][i])

        for i in range(1, 9, 3):
            for j in range(1, 9, 3):
                tmp = set()
                for h in range(i-1, i+2):
                    for w in range(j-1, j+2):
                        if board[h][w] != '.':
                            if board[h][w] in tmp:
                                return False
                            tmp.add(board[h][w])
        
        return True
