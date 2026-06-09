class Solution:
    def arrayStringsAreEqual(self, a: List[str], b: List[str]) -> bool:
        return True if "".join(a)=="".join(b) else False
