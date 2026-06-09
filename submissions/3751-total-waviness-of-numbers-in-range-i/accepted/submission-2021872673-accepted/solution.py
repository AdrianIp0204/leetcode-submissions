class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        c = 0
        for n in range(num1, num2+1):
            n_list = str(n)
            for i in range(1,len(n_list)-1):
                if i == 1:
                    curr = int(n_list[i])
                    prev = int(n_list[i-1])
                    nex = int(n_list[i+1])
                else:
                    prev = curr
                    curr = nex
                    nex = int(n_list[i+1])
                if (curr < prev and curr < nex) or (curr > prev and curr > nex):
                    c += 1
        return c
