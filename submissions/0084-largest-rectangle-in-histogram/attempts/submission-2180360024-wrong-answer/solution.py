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

        while stack:
            last = stack.pop()
            width = last - stack[-1] + 1 if stack else 1
            height = heights[stack[-1]] if stack else 1
            res = max(res, width * height)
        
        return res
