
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

        if stack:
            for i in stack.copy():
                for j in star:
                    if i < j:
                        star.remove(j)
                        stack.remove(i)
                        break
        
        if stack:
            return False
        return True
