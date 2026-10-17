class Solution:
    def countVowelStrings(self, n: int) -> int:
        return comb(n+5-1,n)
