class Solution:
    def countMatches(self, items: List[List[str]], K: str, V: str) -> int:
        rap = {
            "type" : 0,
            "color" : 1,
            "name" : 2
        }
        res = 0
        n = rap[K]
        for i in range(len(items)):
            if items[i][n] == V:
                res += 1
        return res
