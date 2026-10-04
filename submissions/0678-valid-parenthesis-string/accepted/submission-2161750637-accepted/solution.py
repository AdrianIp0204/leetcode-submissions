class Solution:
    def checkValidString(self, s: str) -> bool:
        stack = []
        star = []

        for i, c in enumerate(s):
            if c == '(':
                stack.append(i)
            elif c == ')':
                if stack:
                    stack.pop()
                elif star:
                    star.pop()
                else:
                    return False
            else:
                star.append(i)

        while stack:
            if star and stack[-1] < star.pop():
                stack.pop()
            else:
                return False 

        return True
