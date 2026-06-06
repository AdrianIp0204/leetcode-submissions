class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
        nap = {}
        for n in nums:
            nap[n] = nap.get(n, 0) + 1
        m = list(nap.values())
        lm = len(m)
        m.sort()
        print(m)
        if m[0] == 1:
            if m[1] != 1:
                return m[1]*(lm - 1) + 1
            elif m[-1] != 1:
                return lm + 1
            else:
                return lm
        if m[0] == m[1]:
            return m[0]*lm - 1
