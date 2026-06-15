class Solution:
    def residuePrefixes(self, s: str) -> int:
        seen = set()
        a = 0
        res = 0
        for c in s:
            seen.add(c)
            a += 1
            if a % 3 == len(seen):
                res += 1
            if len(seen) >= 3:
                break
        return res
