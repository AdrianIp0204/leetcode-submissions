class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        find = set()
        res = 0
        for w in words:
            if w not in find:
                find.add(w[::-1])
            else:
                res += 1
        return res
