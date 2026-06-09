class Solution:
    def canAliceWin(self, n: List[int]) -> bool:
        c=0
        l1,l2,s=[],[],[]
        for i in n:
            if i>9:
                l2.append(i)
            else:
                l1.append(i)
            s.append(i)
        s1=sum(l1)
        s2=sum(l2)
        if max(s1,s2)==min(s1,s2):
            return False
        return True
