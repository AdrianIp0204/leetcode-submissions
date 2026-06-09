class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        res = 0
        ws = sorted(set(word))
        for w in ws:
            wn = ord(w)
            if 96<ord(w)<123:
                if chr(wn-32) in ws:
                    res+= 1
        return res
