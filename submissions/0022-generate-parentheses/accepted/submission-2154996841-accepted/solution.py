class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        
        res = []

        def backtrack(path, x, y):

            if len(path) == 2 * n:
                res.append(''.join(path))

            if x < n:
                path.append('(')
                backtrack(path, x+1, y)
                path.pop()

            if y < x:
                path.append(')')
                backtrack(path, x, y+1)
                path.pop()


        backtrack(['('], 1, 0)
        return res
