class Solution:
    def nthUglyNumber(self, n: int) -> int:
        a, b, c = 0, 0, 0
        tmp = [1]
        
        while len(tmp) < n:
            aa = tmp[a] * 2
            bb = tmp[b] * 3
            cc = tmp[c] * 5

            MIN = min(aa, bb, cc)
            tmp.append(MIN)
            if MIN == aa:
                a += 1
            if MIN == bb:
                b += 1
            if MIN == cc:
                c += 1
            
        return tmp[-1]
