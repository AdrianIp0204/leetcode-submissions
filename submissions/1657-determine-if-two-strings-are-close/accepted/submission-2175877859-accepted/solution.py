from collections import Counter
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False

        w1, w2 = Counter(word1), Counter(word2)

        if len(w1) != len(w2):
            return False

        return w1.keys() == w2.keys() and sorted(w1.values()) == sorted(w2.values())
