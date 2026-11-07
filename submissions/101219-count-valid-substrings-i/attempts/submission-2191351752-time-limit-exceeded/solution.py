from collections import deque
class Solution:
    def countValidSubstrings(self, s: str) -> int:
        n = len(s)
        res = 2*n-1
        for i in range(n - 2):
            prev1, prev2, prev3 = s[i], s[i+1], s[i+2]
            if prev1 == 'a' and prev2 == 'b' and prev3 == 'c':
                continue
            res += 1
            for j in range(i + 3, n):
                prev1, prev2, prev3 = prev2, prev3, s[j]
                if prev1 == 'a' and prev2 == 'b' and prev3 == 'c':
                    break
                res += 1

        return res
