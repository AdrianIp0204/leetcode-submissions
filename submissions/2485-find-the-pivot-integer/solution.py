class Solution:
    def pivotInteger(self, n: int) -> int:
        # n/2 (a_1 + a_n)
        num = n+1
        for i in range(1, num):
            if i*(1+i)/2 == ((num - i)*(i+n))/2:
                return i
        return -1
