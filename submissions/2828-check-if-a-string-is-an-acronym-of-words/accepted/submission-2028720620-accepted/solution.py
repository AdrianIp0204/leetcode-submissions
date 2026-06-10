class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        if len(words) != len(s):
            return False
        for w, i in zip(words, s):
            if w[0] != i:
                return False
        return True
