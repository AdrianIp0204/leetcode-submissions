import string
class Solution:
    def mapWordWeights(self, words: List[str], weights: List[int]) -> str:
        az_list = list(string.ascii_lowercase)
        wap = {i:j for i, j in zip(az_list, weights)}
        res = []
        for w in words:
            tmp = 0
            for c in w:
                tmp += wap[c]
            tmp %= 26
            res.append(chr(122 - tmp%26))
        return "".join(res)
