class Solution:
    def judgeCircle(self, m: str) -> bool:
        z=0j
        for i in m:
            if i=='R': 
                z+=1
            elif i=='L':
                z-=1
            elif i=='U':
                z+=1j
            else:
                z-=1j
        if z==0:
            return True
        return False
