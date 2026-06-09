class Solution:
    def finalValueAfterOperations(self, o: List[str]) -> int:
        r=0
        for s in o:
            if s=="++X" or s=="X++":
                r+=1
            else:
                r-=1
        return r
