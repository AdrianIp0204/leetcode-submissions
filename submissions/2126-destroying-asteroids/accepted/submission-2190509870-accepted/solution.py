from heapq import heappop
class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: list[int]) -> bool:
        heapify(asteroids)
        while asteroids and asteroids[0] <= mass:
            mass += heappop(asteroids)
        return not bool(asteroids)
