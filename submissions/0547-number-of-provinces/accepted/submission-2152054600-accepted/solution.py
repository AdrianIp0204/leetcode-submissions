class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        length = len(isConnected)

        connected = 0
        visited = set()
        def search(node):
            visited.add(node)

            for i, n in enumerate(isConnected[node]):
                if n == 1 and i not in visited:
                    search(i)

        for i in range(length):
            if i not in visited:
                connected += 1
                search(i)

        return connected
