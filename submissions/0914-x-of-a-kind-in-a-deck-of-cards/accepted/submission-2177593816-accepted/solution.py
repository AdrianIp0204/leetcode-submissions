from collections import Counter
class Solution:
    def hasGroupsSizeX(self, deck: list[int]) -> bool:
        nist = Counter(deck).values()
        l = len(deck)
        for n in range(2, l + 1):
            if l % n == 0:
                if all(v % n == 0 for v in nist):
                    return True
        return False
