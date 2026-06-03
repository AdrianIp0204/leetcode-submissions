class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        tot = n * (n + 1) // 2
        div = m * (n // m) * (n // m + 1)
        return tot - div
