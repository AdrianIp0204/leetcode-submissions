class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        sist = Counter(s)
        c = next(iter(sist.values()))
        for v in sist.values():
            if v != c:
                return False
        return True
