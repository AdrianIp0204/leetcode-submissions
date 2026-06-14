class Solution:
    def canBeTypedWords(self, text: str, b: str) -> int:
        sist = text.split()
        res = 0
        for w in sist:
            for c in b:
                if c in w:
                    res -= 1
                    break
            res += 1
        return res
