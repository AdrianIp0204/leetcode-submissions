class Solution:
    def findAndReplacePattern(self, words: list[str], pattern: str) -> list[str]:
        n = len(pattern)
        l = len(set(pattern))
        res = []
        for word in words:
            if len(word) == n:
                if len(set(word)) != l:
                    continue
                tmp = {}
                for i, c in enumerate(word):
                    if c in tmp:
                        if tmp[c] != pattern[i]:
                            break
                    else:
                        tmp[c] = pattern[i]
                else:
                    res.append(word)
        
        return res
