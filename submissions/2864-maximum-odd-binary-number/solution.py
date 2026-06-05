class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        l=len(s)
        c=e=s.count("1")
        r=""
        c-=1
        while c!=0:
            r+="1"
            c-=1
        for i in range(e,l):
            r+="0"
        return r+"1"
