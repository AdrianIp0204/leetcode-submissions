class Solution:
    def maximizeSum(self, n: List[int], k: int) -> int:
        return k*(2*max(n)+k-1)//2
