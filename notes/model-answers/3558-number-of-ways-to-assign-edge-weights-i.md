# Number of Ways to Assign Edge Weights I

- Pattern: tree BFS depth + parity count
- Original attempt: [submissions/3558-number-of-ways-to-assign-edge-weights-i](../../submissions/3558-number-of-ways-to-assign-edge-weights-i/)

## Model Solution

```python
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
```

## Why This Is The Model

The accepted solution uses BFS to find the deepest path length, then applies the parity-count formula modulo `1e9 + 7`.

## Invariant or Proof Idea

After BFS, `max_depth` is the largest number of edges on any root-to-node path discovered in the tree.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

Why are there `2^(d - 1)` odd-sum assignments for a path of length `d`?
