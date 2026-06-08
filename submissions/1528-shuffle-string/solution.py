class Solution:
    def restoreString(self, s: str, ind: List[int]) -> str:
        res = [""] * len(s)
        for a, i in zip(s, ind):
            res[i] = a
        return "".join(res)
