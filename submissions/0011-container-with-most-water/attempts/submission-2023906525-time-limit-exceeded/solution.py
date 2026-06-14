class Solution:
    def maxArea(self, height: List[int]) -> int:
        A = 0
        l = len(height)
        for i, h in enumerate(height):
            hi = height[i]
            for j in range(i+1,l):
                tmp = (j-i) * min(hi, height[j])
                if tmp > A:
                    A = tmp
        return A
