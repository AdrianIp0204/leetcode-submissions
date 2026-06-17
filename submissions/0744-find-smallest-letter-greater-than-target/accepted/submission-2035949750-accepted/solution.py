class Solution:
    def nextGreatestLetter(self, l: List[str], t: str) -> str:
        return next((c for c in l if c > t), l[0])
