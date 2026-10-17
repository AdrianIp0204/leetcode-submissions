from collections import deque
class Solution:
    def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
        path = {}
        explored = set()

        queue = deque([source])

        for [k, v] in edges:
            if k in path:
                path[k].add(v)
            else:
                path[k] = {v}

        while queue:
            curr = queue.popleft()

            if curr == destination:
                return True

            explored.add(curr)

            if curr in path:
                for d in path[curr]:
                    if d not in explored:
                        queue.append(d)
        return False
