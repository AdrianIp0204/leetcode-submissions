class Solution:
    def queensAttacktheKing(self, queens: list[list[int]], king: list[int]) -> list[list[int]]:
        r, c = king
        res = []
        sett = set()
        for q in queens:
            sett.add(tuple(q))

        for interval in [range(r+1, 8), range(r-1, -1, -1)]:
            for i in interval:
                if (i, c) in sett:
                    res.append([i, c])
                    break
        
        for interval in [range(c+1, 8), range(c-1, -1, -1)]:
            for j in interval:
                if (r, j) in sett:
                    res.append([r, j])
                    break

        d = [(1,1), (1,-1), (-1, 1), (-1, -1)]
        for di, dj in d:
            i, j = r + di, c + dj
            while 0 <= i < 8 and 0 <= j < 8:
                if (i, j) in sett:
                    res.append([i, j])
                    break
                i += di
                j += dj
        return res
