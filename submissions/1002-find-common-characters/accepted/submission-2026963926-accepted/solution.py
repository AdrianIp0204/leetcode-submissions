class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        res = Counter(words[0])
        for w in words:
            res &= Counter(w)
        return list(res.elements())
