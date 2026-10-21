from collections import deque
class Solution:
    def maxSatisfaction(self, satisfaction: list[int]) -> int:
        if all(n <= 0 for n in satisfaction):
            return 0
        satisfaction = deque(sorted(satisfaction))
        res = max(sum(n * (i + 1) for i, n in enumerate(satisfaction)), 0)
        while satisfaction[0] < 0:
            satisfaction.popleft()
            res = max(res, sum(n * (i + 1) for i, n in enumerate(satisfaction)))
        return res
