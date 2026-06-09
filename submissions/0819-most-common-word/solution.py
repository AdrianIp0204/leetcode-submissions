import re
from typing import List
class Solution:
    def mostCommonWord(self, p: str, ban: List[str]) -> str:
        banned = set(ban)
        p = re.sub(r"[^a-z]", " ", p.lower())
        words = p.split()
        count = {}
        best = 0
        res = ""
        for w in words:
            if w not in banned:
                count[w] = count.get(w, 0) + 1
                if count[w] > best:
                    best = count[w]
                    res = w
        return res
