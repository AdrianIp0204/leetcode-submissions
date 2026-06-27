class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        nap = Counter(nums)
        ans1 = 0
        ans2 = 1
        if 1 in nap:
            if nap[1] % 2:
                ans1 = nap[1]
            else:
                ans1 = nap[1] - 1
            del nap[1]
        
        for x in nap:
            tmp = 1
            p = 2
            for _ in range(30):
                n = pow(x, p)
                if n in nap and nap[x] >= 2 and nap[n] >= 1:
                    tmp += 2
                    p *= 2
                else:
                    break
            ans2 = max(ans2, tmp)
        return max(ans1, ans2)
