class Solution:
    def maxContainers(self, n: int, w: int, maxW: int) -> int:
        if w > maxW:
            return 0
        n2 = n**2
        if n2 * w < maxW:
            return n2
        else:
            return maxW // w
