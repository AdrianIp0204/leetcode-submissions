class Solution:
    def getConcatenation(self, n: List[int]) -> List[int]:
        n.extend(n)
        return n
