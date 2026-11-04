class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        heapify(g)
        heapify(s)

        res = 0
        while s and g and s[0] >= g[0]:
            res += 1
            heappop(g)
            heappop(s)
        
        return res
