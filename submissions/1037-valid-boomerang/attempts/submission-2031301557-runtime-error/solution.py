class Solution:
    def isBoomerang(self, p: List[List[int]]) -> bool:
        m = (p[1][1]-p[0][1])/(p[1][0]-p[0][0])
        c = p[0][1]-m*p[0][0]
        for i in range(2, len(p)):
            if p[i][1] != m*p[i][0] + c:
                return True
        return False
