class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        def check(l, r):
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True
                

        while l < r:
            if s[l] != s[r]:
                return check(l + 1, r) or check(l, r - 1)
            l += 1
            r -= 1

        return True
