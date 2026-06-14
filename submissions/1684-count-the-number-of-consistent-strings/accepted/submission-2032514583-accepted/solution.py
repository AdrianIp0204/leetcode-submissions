class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        sat = set(allowed)
        res = 0
        for w in words:
            if set(w) <= sat:
                res += 1
        return res
