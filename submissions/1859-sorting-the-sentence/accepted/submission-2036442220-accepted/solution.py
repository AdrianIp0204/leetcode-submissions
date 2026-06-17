class Solution:
    def sortSentence(self, s: str) -> str:
        wist = s.split()
        res = [""] * len(wist)
        for w in wist:
            res[int(w[-1])-1] = w[:len(w)-1]
        return " ".join(res)
