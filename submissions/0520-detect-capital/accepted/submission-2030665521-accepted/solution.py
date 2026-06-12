class Solution:
    def detectCapitalUse(self, w: str) -> bool:
        return True if w.islower() or w.isupper() or w.istitle() else False
