class Solution:
    def maxProfit(self, pr: List[int]) -> int:
        a=pr[0]
        res=0
        for i in range(1,len(pr)):
            c=pr[i]
            if c<a:
                a=c
            elif c-a>res:
                res=pr[i]-a
        return res
