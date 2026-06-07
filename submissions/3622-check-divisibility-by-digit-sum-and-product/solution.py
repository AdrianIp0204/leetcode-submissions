class Solution:
    def checkDivisibility(self, n: int) -> bool:
        m=n
        s,p=0,1
        while m!=0:
            t=m%10
            s+=t
            p*=t
            m//=10
        return True if n%(s+p)==0 else False
