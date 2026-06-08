class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False
        vow = False
        con = False
        for w in word:
            wn = ord(w)
            if wn < 48 or 57 < wn < 65 or 90 < wn < 97 or wn > 122:
                return False
            if 64 < wn < 91 or 96 < wn < 123:
                if w in "aeiouAEIOU":
                    vow = True
                else:
                    con = True
        if vow and con:
            return True
        return False
