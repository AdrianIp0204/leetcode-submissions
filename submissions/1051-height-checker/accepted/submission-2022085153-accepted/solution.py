class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        res = 0
        expected = heights.copy()
        heights.sort()
        for i, h in enumerate(heights):
            if h != expected[i]:
                res +=1
        return res
