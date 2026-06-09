class Solution:
    def smallestNumber(self, n: int) -> int:
        return 2**(int(log(n,2))+1)-1
