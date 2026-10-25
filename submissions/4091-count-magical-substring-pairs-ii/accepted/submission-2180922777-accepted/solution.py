from copy import deepcopy
class Solution:
    def countMagicalPairs(self, s: str) -> int:
        n = len(s)
        l = [[0] * 27 for _ in range(n)]
        r = deepcopy(l)
        res = 0
        
        pos = [-1] * 26
        for i in range(n):
            pos[ord(s[i]) - 97] = i
            p = sorted((x for x in pos if x != -1))[::-1]
            for k in range(len(p)):
                l[i][k+1] = p[k] - (p[k+1] if k + 1 < len(p) else -1)
        
        pos = [n] * 26
        for i in range(n-1, -1, -1):
            pos[ord(s[i]) - 97] = i
            p = sorted(x for x in pos if x != n)
            for k in range(len(p)):
                r[i][k+1] = (p[k+1] if k + 1 < len(p) else n) - p[k]

        for i in range(n - 1):
            for k in range(1, 27):
                res += l[i][k] * r[i+1][k]
        
        return res
