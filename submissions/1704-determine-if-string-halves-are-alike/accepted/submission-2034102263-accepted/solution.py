class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vows = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}
        mid = len(s) // 2
        wc = 0
        for c in s[:mid]:
            if c in vows:
                wc += 1
        for c in s[mid:]:
            if c in vows:
                wc -= 1
        return True if wc == 0 else False
