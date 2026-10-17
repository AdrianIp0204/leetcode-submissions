class Solution:
    def findWords(self, words: list[str]) -> list[str]:
        wist = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
        res = []
        for w in words:
            if any(all(c.lower() in l for c in w) for l in wist):
                res.append(w)
        return res
