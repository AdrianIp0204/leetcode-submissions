class Solution:
    def findWords(self, words: list[str]) -> list[str]:
        return [w for w in words if any(all(c.lower() in l for c in w) for l in ["qwertyuiop", "asdfghjkl", "zxcvbnm"])]
