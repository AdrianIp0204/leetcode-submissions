class Solution:
    def assignTasks(self, servers: list[int], tasks: list[int]) -> list[int]:
        free = [(c, i) for i, c in enumerate(servers)]
        heapify(free)

        res, busy = [], []
        for s, t in enumerate(tasks):
            
            while busy and busy[0][0] <= s:
                heappush(free, heappop(busy)[1:])
            
            start, w, i = (s, *heappop(free)) if free else heappop(busy)
            heappush(busy, (start + t, w, i))
            res.append(i)
        return res
