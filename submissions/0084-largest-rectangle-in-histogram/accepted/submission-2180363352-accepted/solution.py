class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        res = 0
        stack = []
        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                last = stack.pop()
                width = i - stack[-1] - 1 if stack else i
                res = max(res, width * heights[last])
            stack.append(i)
        
        n = len(heights)

        while stack:
            last = stack.pop()
            width = n - stack[-1] - 1 if stack else n
            res = max(res, width * heights[last])
        
        return res
