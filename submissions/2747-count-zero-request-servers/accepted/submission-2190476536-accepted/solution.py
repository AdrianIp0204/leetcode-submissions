class Solution:
    def countServers(self, n: int, logs: List[List[int]], x: int, queries: List[int]) -> List[int]:
        logs.sort(key=lambda x:x[1])
        ids = sorted(range(len(queries)), key=lambda i: queries[i])
        res =[0] * len(queries)
        c = [0] * (n + 1)
        l = r = curr = 0

        for i in ids:
            q = queries[i]
            while r < len(logs) and logs[r][1] <= q:
                id = logs[r][0]
                if c[id] == 0:
                    curr += 1
                c[id] += 1
                r += 1
            while l < r and logs[l][1] < q - x:
                id = logs[l][0]
                c[id] -= 1
                if c[id] == 0:
                    curr -= 1
                l += 1
            res[i] = n - curr
        return res
