class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        r, c = click
        if board[r][c] == 'M':
            board[r][c] = 'X'
            return board

        height, width = len(board), len(board[0])
        nap = {}

        def mines(i, j):
            tmp = 0
            for h in range(i - 1, i + 2):
                if 0 <= h < height:
                    for w in range(j - 1, j + 2):
                        if 0 <= w < width:
                            if board[h][w] == 'M':
                                tmp += 1
            return tmp

        def search(i, j):
            n = mines(i, j)
            if n > 0:
                nap[(i, j)] = str(n)
                return
            nap[(i, j)] = 'B'
            for h in [i - 1, i + 1]:
                if 0 <= h < height and (h, j) not in nap:
                    search(h, j)
            for w in [j-1, j+1]:
                if 0 <= w < width and (i, w) not in nap:
                    search(i, w)

        search(r, c)
        for i, j in nap:
            board[i][j] = nap[(i, j)]
        return board
