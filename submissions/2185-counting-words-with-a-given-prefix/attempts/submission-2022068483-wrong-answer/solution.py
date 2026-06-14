class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        c = 0
        p = pref[0]
        for w in words:
            if pref in w and w[0] == p:
                c += 1
        return c
