class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        res = 0
        stack = []
        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                last = stack.pop()
                width = i - stack[-1] - 1 if stack else 1
                res = max(res, width * heights[last])
            stack.append(i)
        while stack:
            res = max(res, heights[stack.pop()])
        return res
