class Solution:
    def findDelayedArrivalTime(self, a: int, d: int) -> int:
        return a + d if a + d < 24 else a + d - 24
