class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        res = []
        for w in words:
            lw = len(w)
            for s in words:
                if len(s) > lw:
                    if w in s:
                        res.append(w)
        return res
