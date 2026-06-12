from typing import List
from collections import deque

class Solution:
    def assignEdgeWeights(self, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        MOD = 10**9 + 7
        n = len(edges) + 1
        LOG = n.bit_length()

        graph = [[] for _ in range(n + 1)]

        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        depth = [0] * (n + 1)
        up = [[0] * (n + 1) for _ in range(LOG)]

        q = deque([1])
        seen = [False] * (n + 1)
        seen[1] = True

        while q:
            node = q.popleft()

            for nei in graph[node]:
                if not seen[nei]:
                    seen[nei] = True
                    depth[nei] = depth[node] + 1
                    up[0][nei] = node
                    q.append(nei)

        for j in range(1, LOG):
            for node in range(1, n + 1):
                up[j][node] = up[j - 1][up[j - 1][node]]

        pow2 = [1] * (n + 1)
        for i in range(1, n + 1):
            pow2[i] = (pow2[i - 1] * 2) % MOD

        def lift(node, steps):
            bit = 0

            while steps:
                if steps & 1:
                    node = up[bit][node]

                steps >>= 1
                bit += 1

            return node

        def lca(a, b):
            if depth[a] < depth[b]:
                a, b = b, a

            a = lift(a, depth[a] - depth[b])

            if a == b:
                return a

            for j in range(LOG - 1, -1, -1):
                if up[j][a] != up[j][b]:
                    a = up[j][a]
                    b = up[j][b]

            return up[0][a]

        res = []

        for a, b in queries:
            ancestor = lca(a, b)
            dist = depth[a] + depth[b] - 2 * depth[ancestor]

            if dist == 0:
                res.append(0)
            else:
                res.append(pow2[dist - 1])

        return res
