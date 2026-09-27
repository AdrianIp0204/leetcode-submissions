class Solution:
    def letterCombinations(self, digits: str) -> list[str]:

        mapp = {
            '2' : 'abc',
            '3' : 'def',
            '4' : 'ghi',
            '5' : 'jkl',
            '6' : 'mno',
            '7' : 'pqrs',
            '8' : 'tuv',
            '9' : 'wxyz'
        }

        res = []
        l = len(digits)

        def backtrack(path, index):
            if index == l:
                res.append(''.join(path))
                return

            for c in mapp[digits[index]]:
                path.append(c)
                backtrack(path, index + 1)
                path.pop()

        backtrack([], 0)
        return res
