class Solution:
    def balancedStringSplit(self, s: str) -> int:
        n = [-1 if i == "L" else 1 for i in s]
        c = 0
        if sum(n) == 0:
            c += 1
        for i in range(2, len(s), 2):
            if sum(n[:i]) == sum(n[i:]) == 0:
                c += 1
        return c
