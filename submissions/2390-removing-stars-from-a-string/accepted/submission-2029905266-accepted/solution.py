class Solution:
    def removeStars(self, s: str) -> str:
        toDelete = 0
        s_list = list(s)
        res = []
        while s_list:
            curr = s_list.pop()
            if curr == "*":
                toDelete += 1
            elif toDelete > 0:
                toDelete -= 1
            else:
                res.append(curr)
        res.reverse()
        return "".join(res)
