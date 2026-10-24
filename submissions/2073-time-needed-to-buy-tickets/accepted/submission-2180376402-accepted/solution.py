from collections import deque
class Solution:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        time = 0
        mapp = {i:n for i, n in enumerate(tickets)}
        queue = deque(range(len(tickets)))
        while mapp[k] > 0:
            now = queue.popleft()
            mapp[now] -= 1
            if mapp[now] > 0:
                queue.append(now)
            time += 1
        return time
