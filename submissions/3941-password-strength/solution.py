class Solution:
    def passwordStrength(self, pd: str) -> int:
        u = set(pd)
        res = 0
        for i in u:
            if 96<ord(i)<123:
                res+=1
            elif 64<ord(i)<91:
                res+=2
            elif 47<ord(i)<58:
                res+=3
            else:
                res+=5
        return res
