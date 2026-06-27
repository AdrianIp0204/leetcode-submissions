class Solution:
    def merge(self, n: List[List[int]]) -> List[List[int]]:
        LEN = max(x[1] for x in n) + 2
        tmp = [False] * LEN
        closed = True
        ans = []
        for x in n:
            [a, b] = x
            for i in range(a, b + 1):
                tmp[i] = True
        for i in range(LEN):
            if closed:
                if tmp[i]:
                    a = i
                    closed = False
            else:
                if not tmp[i]:
                    ans.append([a, i-1])
                    closed = True
        return ans
