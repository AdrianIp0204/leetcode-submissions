class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        res = []
        x = True
        for i in range(0, len(s), k):
            if x:
                res.append(s[i:i+k][::-1])
                x = False
            else:
                res.append(s[i:i+k])
                x = True
        return ''.join(res)
