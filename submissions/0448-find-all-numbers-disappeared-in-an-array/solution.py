class Solution:
    def findDisappearedNumbers(self, a: List[int]) -> List[int]:
        res = []
        l = len(a) + 1
        nap = {i: 0 for i in range(1, l)}
        for n in a:
            nap[n] += 1
        for n, f in nap.items():
            if f == 0:
                res.append(n)
        return res
