class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        res = []
        numbers = set(range(1, n + 1))

        def backtrack(path):
            if len(path) == k:
                if path not in res and list(reversed(path)) not in res:
                    res.append(path.copy())
                return

            for n in numbers.copy():
                numbers.remove(n)
                path.append(n)

                backtrack(path)

                numbers.add(n)
                path.pop()
            

        for i in range(1, n + 1):
            numbers.remove(i)
            path = [i]
            backtrack(path)
            numbers.add(i)

        return res
