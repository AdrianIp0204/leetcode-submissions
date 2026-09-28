class Solution:
    def maxDepth(self, s: str) -> int:
        curr = 0
        MAX = 0
        for c in s:
            if c == '(':
                curr += 1
            elif c == ')':
                curr -= 1
            if curr > MAX:
                MAX = curr
        return MAX
