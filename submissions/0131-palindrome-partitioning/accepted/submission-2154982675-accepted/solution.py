class Solution:
    def partition(self, s: str) -> list[list[str]]:
        res = []
        l = len(s)
        def backtrack(path, start):
            if start == l:
                res.append(path.copy())
                return

            for end in range(start+1, l+1):
                substring = s[start:end]

                if substring == substring[::-1]:
                    path.append(substring)
                    backtrack(path, end)
                    path.pop()

        backtrack([],0)
        return res
