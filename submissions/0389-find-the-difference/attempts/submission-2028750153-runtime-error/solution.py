class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        return (set(t)-set(s)).pop()
