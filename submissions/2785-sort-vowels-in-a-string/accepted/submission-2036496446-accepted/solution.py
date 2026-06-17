class Solution:
    def sortVowels(self, s: str) -> str:
        vows = []
        ind = []
        vet = {"A", "E", "I", "O", "U", "a", "e", "i", "o", "u"}
        res = list(s)
        for i, c in enumerate(s):
            if c in vet:
                vows.append(c)
                ind.append(i)
        vows.sort()
        for i, v in zip(ind, vows):
            res[i] = v
        return "".join(res)
