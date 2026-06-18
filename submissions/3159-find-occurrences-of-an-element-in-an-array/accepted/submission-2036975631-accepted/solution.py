class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        res = [-1] * len(queries)
        occ = []
        for i in range(len(nums)):
            if nums[i] == x:
                occ.append(i)
        lo = len(occ)
        for i, q in enumerate(queries):
            if q <= lo:
                res[i] = occ[q-1]
        return res
