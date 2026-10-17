from collections import Counter
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        l = len(s1)
        s1 = dict(Counter(s1))
        if len(s2) < l:
            return False
        wap = dict(Counter(s2[:l]))
        if wap == s1:
                return True
        for i in range(l, len(s2)):
            leave = s2[i-l]
            wap[leave] -= 1
            if wap[leave] == 0:
                del wap[leave]
            wap[s2[i]] = wap.get(s2[i], 0) + 1
            if wap == s1:
                return True
        return False
