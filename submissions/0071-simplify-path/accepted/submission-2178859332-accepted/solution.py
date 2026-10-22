class Solution:
    def simplifyPath(self, path: str) -> str:
        path = [s for s in path.split('/') if s]
        stack = []
        for s in path:
            if s == '.':
                continue
            elif s == '..':
                if stack:
                    stack.pop()
            else:
                stack.append(s)
        return '/' + '/'.join(stack)
