class Solution:
    def countCharacters(self, words: list[str], chars: str) -> int:
        chars = Counter(chars)
        res = 0
        for w in words:
            if all(v <= chars[k] for k, v in Counter(w).items()):
                res += len(w) 
        return res
