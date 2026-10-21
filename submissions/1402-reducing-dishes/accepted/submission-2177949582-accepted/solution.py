from collections import deque
class Solution:
    def maxSatisfaction(self, satisfaction: list[int]) -> int:
        res = tmp = 0
        satisfaction.sort()
        while satisfaction and satisfaction[-1] + tmp > 0:
            tmp += satisfaction.pop()
            res += tmp
        return res
