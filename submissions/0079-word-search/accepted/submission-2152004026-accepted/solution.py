class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:

        height, width = len(board), len(board[0])
        length = len(word)

        def search(h, w, k):

            if board[h][w] != word[k]:
                return False

            if k == length - 1:
                return True
            
            used.add((h, w))

            for i in [h-1, h+1]:
                if 0 <= i < height and (i, w) not in used:
                    if search(i, w, k + 1):
                        return True

            for j in [w-1, w+1]:
                if 0 <= j < width and (h, j) not in used:
                    if search(h, j, k + 1):
                        return True

            used.remove((h, w))

            return False


        for h in range(height):
            for w in range(width):
                used = set()
                if board[h][w] == word[0]:
                    if search(h, w, 0):
                        return True

        return False
