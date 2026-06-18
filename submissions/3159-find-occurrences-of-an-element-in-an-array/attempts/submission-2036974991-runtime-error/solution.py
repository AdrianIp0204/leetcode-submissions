class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        l = len(queries)
        res = [-1] * l
        occ = []
        for i in range(l):
            if nums[i] == x:
                occ.append(i)
        lo = len(occ)
        for i, q in enumerate(queries):
            if q <= lo:
                res[i] = occ[q-1]
        return res
