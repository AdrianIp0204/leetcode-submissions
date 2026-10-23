from collections import deque
class Solution:
    def tribonacci(self, n: int) -> int:
        if n <= 1:
            return n
        elif n == 2:
            return 1
        else:
            tmp = deque([0, 1, 1])
            for _ in range(n - 2):
                tmp.append(sum(tmp))
                tmp.popleft()
            return tmp[-1]
