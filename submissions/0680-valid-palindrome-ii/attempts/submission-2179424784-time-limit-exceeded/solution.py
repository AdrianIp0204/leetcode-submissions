class Solution:
    def validPalindrome(self, s: str) -> bool:
        if s == s[::-1]:
            return True
        s = list(s)
        for i in range(len(s)):
            tmp = s.pop(i)
            if s == list(reversed(s)):
                return True
            s.insert(i, tmp)
        return False
