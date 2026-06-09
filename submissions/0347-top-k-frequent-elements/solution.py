class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        nap = {}
        c = 0
        res = []
        for n in nums:
            nap[n] = nap.get(n, 0) + 1
        nap = dict(sorted(nap.items(), key=lambda item: item[1], reverse=True))
        nap_key = list(nap)
        for i in range(k):
            res.append(nap_key[i])
        return res
