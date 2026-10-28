import re
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        curr = ''
        n = len(s)
        for i in range(len(s)//2):
            curr = curr + s[i]
            if n % len(curr) == 0:
                if re.fullmatch(fr'(?:{curr}){{2,}}', s):
                    return True
        return False
