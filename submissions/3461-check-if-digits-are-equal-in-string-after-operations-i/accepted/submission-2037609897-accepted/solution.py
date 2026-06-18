class Solution:
    def hasSameDigits(self, s: str) -> bool:
        curr = [int(i) for i in s]
        tmp = []
        for i in range(0, len(curr)-1):
            tmp.append((curr[i] + curr[i+1])%10)
        while len(tmp) > 2:
            tmp2 = []
            for i in range(0, len(tmp) - 1):
                tmp2.append((tmp[i]+tmp[i+1])%10)
            tmp = tmp2
        return True if tmp[0] == tmp[1] else False
