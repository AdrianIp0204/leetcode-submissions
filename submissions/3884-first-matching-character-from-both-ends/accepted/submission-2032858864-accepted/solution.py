class Solution:
    def firstMatchingIndex(self, s: str) -> int:
        l = len(s)
        for i in range(l):
            if s[i] == s[l-i-1]:
                return i
        return -1
