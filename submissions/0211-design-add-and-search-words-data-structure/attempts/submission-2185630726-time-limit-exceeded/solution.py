class WordDictionary:

    def __init__(self):
        self.l = set()

    def addWord(self, word: str) -> None:
        self.l.add(word)


    def search(self, word: str) -> bool:
        for w in self.l:
            if re.fullmatch(fr'{word}', w):
                return True
        return False
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
