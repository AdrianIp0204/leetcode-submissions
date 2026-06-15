class Solution:
    def findCommonResponse(self, responses: List[List[str]]) -> str:
        wap = {}
        for wl in responses:
            seen = set()
            for w in wl:
                if w not in seen:
                    wap[w] = wap.get(w, 0) + 1
                    seen.add(w)
        return next(iter(sorted(sorted(wap.items(), key=lambda x: x[0]), key=lambda x: x[1], reverse=True)))[0]
