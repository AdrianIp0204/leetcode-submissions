class Solution:
    def numOfStrings(self, p: List[str], w: str) -> int:
        return sum(1 for a in p if a in w)
