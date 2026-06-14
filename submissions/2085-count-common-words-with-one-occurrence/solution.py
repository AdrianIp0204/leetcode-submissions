class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        cw1, cw2 = Counter(words1), Counter(words2)
        res = 0
        for k, v in cw1.items():
            if v == 1 and cw2[k] == 1:
                res += 1
        return res
