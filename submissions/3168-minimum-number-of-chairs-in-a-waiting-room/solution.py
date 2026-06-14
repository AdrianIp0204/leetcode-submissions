class Solution:
    def minimumChairs(self, s: str) -> int:
        res, current = 0, 0
        for i in s:
            current += 1 if i == "E" else -1
            if current > res:
                res = current
        return res
