class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        sap = {h:n for h, n in zip(heights, names)}
        sort = dict(sorted(sap.items(), reverse=True))
        return [n for n in sort.values()]
