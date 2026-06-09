class Solution:
    def maxTotalValue(self, n: List[int], k: int) -> int:
        return (max(n)-min(n))*k
