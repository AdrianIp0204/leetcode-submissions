class TrieNode:
    def __init__(self):
        self.childrien = {}
        self.end = False


class Trie:

    def __init__(self):
        self.tree = TrieNode()
        

    def insert(self, word: str) -> None:
        curr = self.tree
        for c in word:
            if c not in curr.childrien:
                curr.childrien[c] = TrieNode()
            curr = curr.childrien[c]
        curr.end = True


        
    def search(self, word: str) -> bool:
        curr = self.tree
        for c in word:
            if c not in curr.childrien:
                return False
            curr = curr.childrien[c]
        return True if curr.end else False
        

    def startsWith(self, prefix: str) -> bool:
        curr = self.tree
        for c in prefix:
            if c not in curr.childrien:
                return False
            curr = curr.childrien[c]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
