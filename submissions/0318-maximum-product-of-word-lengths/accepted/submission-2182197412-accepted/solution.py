class Solution:
    def maxProduct(self, words: list[str]) -> int:
        nap = defaultdict(int)
        seen = set()
        for w in words:
            key = frozenset(w)
            seen.add(key)
            nap[key] = max(nap[key], len(w))
        l = len(seen)
        res = 0
        seen = list(seen)
        for i in range(l - 1):
            for j in range(i+1, l):
                if seen[i].isdisjoint(seen[j]):
                    res = max(res, nap[seen[i]] * nap[seen[j]])
        return res
