class Solution:
    def allPathsSourceTarget(self, graph: list[list[int]]) -> list[list[int]]:
        
        target = len(graph) - 1
        res = []

        def search(i, path):
            if i == target:    
                res.append(path.copy())
                return
            
            for j in graph[i]:
                path.append(j)
                search(j, path)
                path.pop()

        search(0, [0])
       
        return res
