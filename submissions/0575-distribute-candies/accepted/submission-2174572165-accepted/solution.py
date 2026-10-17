class Solution:
    def distributeCandies(self, candyType: list[int]) -> int:
        return min(len(candyType)//2, len(set(candyType)))
