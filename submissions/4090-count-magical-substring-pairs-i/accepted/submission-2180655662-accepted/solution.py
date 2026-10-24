from collections import Counter
class Solution:
    def countMagicalPairs(self, s: str) -> int:
        l = len(s)
        res = 0
        for j in range(l):
            nap = {}
            left = set()
            right = set()
            
            for i in range(j, -1, -1):
                left.add(s[i])
                c = len(left) 
                nap[c] = nap.get(c, 0) + 1

            for k in range(j + 1, l):
                right.add(s[k])
                c = len(right)
                res += nap.get(c, 0)

        return res
