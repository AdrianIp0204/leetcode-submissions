class Solution:
    def maximumWealth(self, a: List[List[int]]) -> int:
        c=0
        for i in a:
            s=sum(i)
            if s>c:
                c=s
        return c
