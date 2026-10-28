from collections import deque
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if s == goal:
            return True
        s = deque(s)
        goal = deque(goal)
        for _ in range(len(s) - 1):
            s.append(s.popleft())
            if s == goal:
                return True
        return False
