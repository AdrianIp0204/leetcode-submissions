class Solution:
    def findNonMinOrMax(self, n: List[int]) -> int:
        if len(n)<3:
            return -1
        n.sort()
        return n[1]
