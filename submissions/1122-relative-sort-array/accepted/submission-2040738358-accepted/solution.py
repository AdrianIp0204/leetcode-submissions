class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        c1 = Counter(arr1)
        res = []
        tmp = []
        for n in arr2:
            res.extend([n]*c1[n])
        for n in arr1:
            if n not in arr2:
                tmp.append(n)
        res.extend(sorted(tmp))
        return res
