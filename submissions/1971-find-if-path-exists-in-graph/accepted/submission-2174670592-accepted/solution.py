from collections import deque
class Solution:
    def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
        path = defaultdict(set)
        explored = {source}

        queue = deque([source])

        for [k, v] in edges:
            path[k].add(v)
            path[v].add(k)


        while queue:
            curr = queue.popleft()

            if curr == destination:
                return True

            if curr in path:
                for d in path[curr]:
                    if d not in explored:
                        explored.add(d)
                        queue.append(d)
        return False
