class Solution:
    def findRestaurant(self, list1: list[str], list2: list[str]) -> list[str]:
        wap = {}
        for i, w in enumerate(list1):
            wap[w] = i
        res = defaultdict(list)
        MIN = float('inf')
        for i, w in enumerate(list2):
            if w in wap:
                res[i+wap[w]].append(w)
                MIN = min(MIN, i+wap[w])
        return res[MIN]
