class Solution:
    def allPathsSourceTarget(self, graph: list[list[int]]) -> list[list[int]]:
        
        target = len(graph) - 1
        res = []

        def search(i, path):
            path.append(i)

            if i == target:
                if path not in res:
                    res.append(path.copy())
                return
            
            for j in graph[i]:
                search(j, path)
                path.pop()

        for i in graph[0]:
            search(i, [0])
       
        return res
