class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True
        elif not t:
            return False
        l, r = 0, len(s)
        for c in t:
            if c == s[l]:
                l += 1
            if l == r:
                return True
        return False
