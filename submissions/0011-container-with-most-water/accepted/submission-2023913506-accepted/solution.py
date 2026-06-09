class Solution:
    def maxArea(self, height: List[int]) -> int:
        A = 0
        L = 0
        R = len(height) - 1
        while L < R:
            tmp = (R - L) * min(height[L], height[R])
            if tmp > A:
                A = tmp
            if height[L] < height[R]:
                L += 1
            else:
                R -= 1
        return A
