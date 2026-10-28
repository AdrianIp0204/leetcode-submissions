class Solution:
    def findRepeatedDnaSequences(self, s: str) -> list[str]:
        curr = s[:10]
        seen = {curr}
        added = set()
        res = []
        for i in range(10, len(s)):
            tmp = curr[1:] + s[i]
            if tmp in seen and tmp not in added:
                res.append(tmp)
                added.add(tmp)
            else:
                seen.add(tmp)
            curr = tmp
        return res
