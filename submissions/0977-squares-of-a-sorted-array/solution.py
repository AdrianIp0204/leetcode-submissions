class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        m = []
        for n in nums:
            m.append(n**2)
        return (sorted(m))
