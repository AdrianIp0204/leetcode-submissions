class Solution:
    def repeatedStringMatch(self, a: str, b: str, x: int, y: int) -> bool:
        return b*y in a*x
