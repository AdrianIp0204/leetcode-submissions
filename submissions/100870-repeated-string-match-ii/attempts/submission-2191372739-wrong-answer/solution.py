class Solution:
    def repeatedStringMatch(self, a: str, b: str, x: int, y: int) -> bool:
        return b*(y%10) in a*(x%10)
