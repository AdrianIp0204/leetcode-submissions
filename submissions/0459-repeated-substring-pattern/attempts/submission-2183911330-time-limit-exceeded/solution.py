import re
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        curr = ''
        for i in range(len(s)//2):
            curr = curr + s[i]
            if re.fullmatch(fr'(?:{curr})+', s):
                return True
        return False
