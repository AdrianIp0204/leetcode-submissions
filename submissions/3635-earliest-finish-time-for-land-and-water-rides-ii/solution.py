class Solution:
    def earliestFinishTime(self, StartL: List[int], DurationL: List[int], StartW: List[int], DurationW: List[int]) -> int:
        minL, minW = 500000, 500000
        pathL, pathW = 0, 0
        n, m = len(StartL), len(StartW)

        for i in range(n):
            totL = StartL[i] + DurationL[i]
            if totL < minL:
                for j in range(m):
                    pathL = max(totL, StartW[j]) + DurationW[j]
                    if pathL < minL:
                        minL = pathL
        for i in range(m):
            totW = StartW[i] + DurationW[i]
            if totW < minW:
                for j in range(n):
                    pathW = max(totW, StartL[j]) + DurationL[j]
                    if pathW < minW:
                        minW = pathW
        return min(minL, minW)
