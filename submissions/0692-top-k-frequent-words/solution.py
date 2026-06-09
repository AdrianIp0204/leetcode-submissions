class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        wap = {}
        for w in words:
            wap[w] = wap.get(w, 0) + 1
        wap_list = [k for k, v in sorted(wap.items(), key=lambda x:(-x[1],x[0]))]
        return wap_list[:k]
