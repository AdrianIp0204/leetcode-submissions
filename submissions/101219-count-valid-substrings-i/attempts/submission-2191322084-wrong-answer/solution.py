from collections import deque
class Solution:
    def countValidSubstrings(self, s: str) -> int:
        n = len(s)
        res = 0
        target = deque(['a', 'b', 'c'])
        for i in range(n):
            tmp = deque()
            for j in range(i, n):
                tmp.append(s[j])
                if len(tmp) > 3:
                    tmp.popleft()
                    tmp.append(s[i])
                if tmp == target:
                    break
                res += 1
        return res
