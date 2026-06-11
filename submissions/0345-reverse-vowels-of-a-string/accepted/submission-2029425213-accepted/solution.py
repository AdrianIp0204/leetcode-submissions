class Solution:
    def reverseVowels(self, s: str) -> str:
        vows = set("aeiouAEIOU")
        right = len(s) - 1
        res = []
        for w in s:
            if w not in vows:
                res.append(w)
            else:
                while s[right] not in vows:
                    right -= 1
                res.append(s[right])
                right -= 1
        return "".join(res)
