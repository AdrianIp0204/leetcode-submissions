class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        right = len(s) - 1
        res = []
        for w in s:
            if 96 < ord(w) < 123 or 64 < ord(w) < 91:
                while ord(s[right]) < 65 or 90 < ord(s[right]) < 97:
                    right -= 1
                res.append(s[right])
                right -= 1
            else:
                res.append(w)
        return "".join(res)
