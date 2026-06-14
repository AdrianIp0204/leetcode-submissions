class Solution:
    def numberOfCuts(self, n: int) -> int:
        return 0 if n==1 else n if n%2 else n//2
