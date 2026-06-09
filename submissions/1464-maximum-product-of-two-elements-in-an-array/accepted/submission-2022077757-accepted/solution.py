class Solution:
    def maxProduct(self, n: List[int]) -> int:
        n.sort()
        return (n.pop()-1)*(n.pop()-1)
