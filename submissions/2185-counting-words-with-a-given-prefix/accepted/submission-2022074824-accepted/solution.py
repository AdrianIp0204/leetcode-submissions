class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        c = 0
        l = len(pref)
        j = l-1
        for w in words:
            if pref not in w:
                continue
            else:
                for i in range(l):
                    if w[i] != pref[i]:
                        continue
                    elif i == j:
                        c += 1
        return c
