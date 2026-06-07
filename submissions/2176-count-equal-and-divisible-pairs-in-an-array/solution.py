class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        nap = {}
        res = 0
        for i, n in enumerate(nums):
            nap[n] = nap.get(n, [])
            nap[n].append(i)

        for l in nap.values():
            if len(l) > 1:
                for n in combinations(l, 2):
                    if prod(n) % k == 0:
                        res += 1
        return res
