class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g = [-i for i in g]
        heapify(g)
        s = [-i for i in s]
        heapify(s)

        res = 0
        while s and g:
            if s[0] <= g[0]: 
                res += 1
                heappop(g)
                heappop(s)
            else:
                heappop(g)
        
        return res
