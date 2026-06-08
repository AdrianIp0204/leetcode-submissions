class Solution:
    def distributeCandies(self, n: int, l: int) -> int:
        def ways(s):
            if s < 0:
                return 0
            return (s + 1) * (s + 2) // 2
        return (ways(n)
            - 3 * ways(n - (l + 1))
            + 3 * ways(n - 2 * (l + 1))
            - ways(n - 3 * (l + 1))
        )
