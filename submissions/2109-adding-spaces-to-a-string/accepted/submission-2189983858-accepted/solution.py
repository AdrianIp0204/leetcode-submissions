class Solution:
    def addSpaces(self, s: str, spaces: list[int]) -> str:
        p = 0
        res = []
        n = len(spaces)
        for i, c in enumerate(s):
            if p < n and i == spaces[p]:
                p += 1
                res.append(' ')
            res.append(c)
        return ''.join(res)
