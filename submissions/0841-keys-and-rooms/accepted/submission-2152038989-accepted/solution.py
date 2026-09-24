class Solution:
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:

        visited = {0}
        def search(node):
            for n in rooms[node]:
                if n not in visited:
                    visited.add(n)
                    search(n)

        search(0)
        return len(visited) == len(rooms)
