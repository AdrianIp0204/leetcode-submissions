class Solution:
    def minDeletionSize(self, strs: list[str]) -> int:
        res = 0
        h, w = len(strs), len(strs[0])
        
        for j in range(w):
            for i in range(1, h):
                if strs[i][j] < strs[i-1][j]:
                    res += 1
                    break
        return res
