class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        A = set()
        B = set()
        for i in paths:
            A.add(i[0])
            B.add(i[1])
        return (B - (A&B)).pop()
