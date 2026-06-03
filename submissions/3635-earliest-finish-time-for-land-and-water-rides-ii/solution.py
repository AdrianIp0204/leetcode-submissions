class Solution:
    def earliestFinishTime(self, StartL: List[int], DurationL: List[int], StartW: List[int], DurationW: List[int]) -> int:
        minL, minW = 500000, 500000
        pathL, pathW = 0, 0
        for i in range(len(StartL)):
            totL = StartL[i] + DurationL[i]
            if totL < minL:
                for j in range(len(StartW)):
                    if StartW[j] > totL:
                        pathL = StartW[j] + DurationW[j]
                    else:
                        pathL = totL + DurationW[j]
                    if pathL < minL:
                        minL = pathL
        for i in range(len(StartW)):
            totW = StartW[i] + DurationW[i]
            if totW < minW:
                for j in range(len(StartL)):
                    if StartL[j] > totW:
                        pathW = StartL[j] + DurationL[j]
                    else:
                        pathW = totW + DurationL[j]
                    if pathW < minW:
                        minW = pathW
        return min(minL, minW)
