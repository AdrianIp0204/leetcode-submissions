class Solution:
    def maxBuilding(self, n: int, res: List[List[int]]) -> int:
        res.append([1,0])
        res.sort()
        if res[-1][0] != n:
            res.append([n, n-1])
        m = len(res)

        for i in range(1, m):
            dist = res[i][0] - res[i-1][0]
            res[i][1] = min(res[i][1], res[i-1][1] + dist)

        for i in range(m-2, -1, -1):
            dist = res[i+1][0] - res[i][0]
            res[i][1] = min(res[i][1],res[i+1][1] + dist)

        ans = 0

        for i in range(1, m):
            x1, h1 = res[i - 1]
            x2, h2 = res[i]

            d = x2 - x1
            ans = max(ans, (h1 + h2 + d) // 2)
        return ans
