class Solution:
    def isValid(self, s: str) -> bool:

        mapp = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }

        stack = []

        for c in s:
            if c in mapp:
                stack.append(c)
            elif stack and mapp[stack[-1]] == c:
                stack.pop()
            else:
                return False

        if stack:
            return False
        return True
