class Solution:
    def defangIPaddr(self, a: str) -> str:
        return a.replace(".","[.]")
