from collections import Counter
class Solution:
    def hasGroupsSizeX(self, deck: list[int]) -> bool:
        tmp = 0
        for v in Counter(deck).values():
            if not tmp:
                tmp = v
            elif v != tmp:
                return False
        return True
