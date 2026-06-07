class Solution:
    def concatWithReverse(self, n: list[int]) -> list[int]:
        return n+n[::-1]
