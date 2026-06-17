class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        n = list(num)
        while n[-1] == "0":
            n.pop()
        return "".join(n)
