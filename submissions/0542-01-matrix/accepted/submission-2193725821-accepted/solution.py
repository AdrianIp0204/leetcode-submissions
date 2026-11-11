class Solution:
    def updateMatrix(self, mat: list[list[int]]) -> list[list[int]]:
        h, w = len(mat), len(mat[0])
        q = deque()
        for i in range(h):
            for j in range(w):
                if mat[i][j] == 0:
                    q.append((i, j))
                else:
                    mat[i][j] = float('inf')
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        while q:
            i, j = q.popleft()
            for dr, dc in directions:
                r, c = i + dr, j + dc
                if 0 <= r < h and 0 <= c < w and mat[r][c] > mat[i][j] + 1:
                    q.append((r, c))
                    mat[r][c] = mat[i][j] + 1
        return mat
