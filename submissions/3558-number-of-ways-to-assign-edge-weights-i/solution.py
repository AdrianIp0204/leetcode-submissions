class Solution:
    def assignEdgeWeights(self, edges: List[List[int]]) -> int:
        MOD = 10**9 + 7
        
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        q = deque([(1, 0)]) 
        seen = {1}
        max_depth = 0
        
        while q:
            node, depth = q.popleft()
            max_depth = max(max_depth, depth)
            
            for nei in graph[node]:
                if nei not in seen:
                    seen.add(nei)
                    q.append((nei, depth + 1))
        
        return pow(2, max_depth - 1, MOD)
