class Solution:
    def countSymmetricIntegers(self, l: int, h: int) -> int:
        c=0
        for n in range(l,h+1):
            if 10<n<100:
                if n%10==n//10:
                    c+=1
            if 1000<n<10000:
                a=0
                b=0
                a+=n%10
                n//=10
                a+=n%10
                n//=10
                b+=n%10
                n//=10
                b+=n%10
                if a==b:
                    c+=1
        return c
