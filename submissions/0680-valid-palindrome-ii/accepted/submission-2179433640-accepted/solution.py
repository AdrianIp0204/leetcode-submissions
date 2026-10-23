class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        c = True
        def check(l, r):
            nonlocal c
            if l >= r:
                return True
            
            if s[l] == s[r]:
                return check(l + 1, r - 1)
            elif c:
                c = False
                return check(l, r - 1) or check(l + 1, r)

            return False
        return check(l, r)
