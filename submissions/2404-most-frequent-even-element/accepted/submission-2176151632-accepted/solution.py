class Solution:
    def mostFrequentEven(self, nums: list[int]) -> int:
        res = (0,0)
        nap = defaultdict(int)

        for n in nums:
            if n % 2 == 0:
                nap[n] += 1
        
        if not nap:
            return -1


        for k, v in nap.items():
            if v > res[1]:
                res = (k, v)
            elif v == res[1]:
                if k < res[0]:
                    res = (k, v)
        return res[0]
