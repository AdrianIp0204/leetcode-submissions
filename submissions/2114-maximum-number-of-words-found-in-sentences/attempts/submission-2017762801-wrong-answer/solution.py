class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        c = 0
        for word in sentences:
            if " " in word:
                w = len(word.split(" "))
                if w > c:
                    c = w
        return c
