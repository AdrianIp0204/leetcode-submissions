from collections import deque
class RecentCounter:

    def __init__(self):
        self.count = 0
        self.request = deque()
        

    def ping(self, t: int) -> int:
        while self.request and self.request[0] < t - 3000:
            self.request.popleft()
        self.request.append(t)
        return len(self.request)
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
